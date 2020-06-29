---
title: Simple tests are good tests
layout: post
author: Cam Sexton
---
Here's a test:
```
describe("The thing works", () => {
  it("is created with an error", () => {
    const thing = new Thing()
    expect(thing).toBeInstanceOf(Thing)
  })
})
```

This test seems so simple to the point that I wondered at first whether it was worth having. When I changed the constructor and accidentally broke it, though, I realized how useful this test is. My test caught this without me having to run any "real" code.
