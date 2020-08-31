---
marp: true
theme: uncover
style: |
  section {
    font-size: 32px;
    letter-spacing: 0.03em;
  }
---

<!-- _class: invert -->
![bg blur brightness:0.75](https://unsplash.com/photos/sPw8RqYTdn0/download?force=true&w=1920)

# Structural Typing and Algebraic Data Types

### (with Typescript)

##### I'm Grant BTW

---

## What's ahead?

* Why?
* Very brief refresher on static types in general
  * Examples with TS
* What is structural typing (as opposed to nominal typing)?
  * Examples with TS
* What are algebraic data types?
  * Examples with TS
* Fun ways to combine them?
  * Examples with TS

---

## Why talk about structural typing and algebraic data types?

* They add a lot of flexibility to static type systems
* Still allow compiler to check correctness
* You'll probably encounter them in the future if you haven't already
* **I think they're cool**

---

![bg right:35% 80%](https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png)

## Why Typescript?

* Familiar and has both features.
* Other langs with Algebraic Data Types
  * C++, F#, Haskell, Kotlin, Perl, Rust
* with Structural Typing
  * Go
* with both
  * Julia, OCaml, Scala, Swift

---

## Refresher: Static types

* Often a feature of compiled languages
* Define explicitly ahead of time what properties are available on variables and parameters
* Allows compiler to do up front correctness checks on your code

---
<!-- _class: invert -->
![bg](#3178c6)

# Examples with TS

---
<!-- _class: invert --> 
![bg blur brightness:0.75](https://unsplash.com/photos/P_qvsF7Yodw/download?force=true&w=1920)

# Structural Typing

---

## Before we get too far: What is _Nominal_ typing?

* It's what we're probably used to.
* Variable `v` is a `Vehicle` because it was declared a `Vehicle`
  * The _name_ of the type of `v` is `Vehicle`
* Variable `t` is a `Truck` but is also a `Vehicle` because we explicitly said `Truck extends Vehicle`

---

## How is _Structural_ typing different?

> ...compatibility and equivalence are determined by the type's actual structure or definition and not by other characteristics such as its name...

EngineerScotty, Pengo, and Anonymous Wikipedia Editor at 86.44.112.174

---
<!-- _class: invert -->
![bg](#3178c6)

# Examples with TS

---
<!-- _class: invert -->
![bg blur brightness:0.75](https://www.vaughn.edu/wp-content/uploads/2019/04/Math-Equations-on-Chalkboard.jpg)

# Algebraic Data Types

---

## Algebraic Data Types

* Combine existing types to create new types
* Combine `Cat` and `Dog` to create a `CatDog` type
* Combine `TextInput` and `NumberInput` to create a `GenericInput` type
* Mainly: Products and Sums

---

## Product Types

* Think `AND`
* Operates on _fields_ of types (including properties and methods)
* `Cat ⋅ Dog` has all _fields_ of `Cat` AND all _fields_ of `Dog`
* In TS: called an "Intersection"; operator is `&`

---

## Sum Types

* Think `OR`
* Creates _variants_ of a type
* `TextInput + NumberInput` could be a `TextInput` OR a `NumberInput`
* Need to determine which _variant_ you have before using it, typically using a _tag_
* _tags_ for _variants_ could be handled by compiler or manually, depending on the language
* In TS: called an "(Untagged) Union"; operator is `|`

---
<!-- _class: invert -->
![bg](#3178c6)

# Examples with TS

---

## Questions?
