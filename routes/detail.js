var express = require('express');
var router = express.Router();

var platos = [
  {
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    title: 'Carpaccio fresco',
    image: '/images/Carpaccio-de-salmon.jpg',
    price: '65.50'
  },
  {
    description: "Plato tipico",
    title: "Risotto de berenjena",
    image: "/images/Risotto-berenjena-queso-cabra.jpg",
    price: "47.00"
  },
  {
    description: "Plato tipico",
    title: "Mousse de arroz",
    image: "/images/Mousse-de-arroz-con-leche.jpg",
    price: "27.50"
  },
  {
    description: "Plato tipico",
    title: "Espárragos blancos",
    image: "/images/esparragos.jpg",
    price: "37.50"
  }
]

/* GET users listing. */
router.get('/:id', function(req, res) {
  res.render('detalleMenu', platos[req.params.id]);
});

module.exports = router;
