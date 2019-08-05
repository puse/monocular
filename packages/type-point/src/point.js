function Point (x, y) {
  if (!(this instanceof Point)) {
    return new Point(x, y)
  }

  this.x = x
  this.y = y

  return this
}

module.exports = Point
