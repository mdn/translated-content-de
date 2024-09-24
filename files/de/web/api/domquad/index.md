---
title: DOMQuad
slug: Web/API/DOMQuad
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

Ein `DOMQuad` ist eine Sammlung von vier `DOMPoint`s, die die Ecken eines beliebigen Vierecks definieren. Die Rückgabe von `DOMQuad`s ermöglicht es `getBoxQuads()`, auch bei beliebigen 2D- oder 3D-Transformationen genaue Informationen bereitzustellen. Es verfügt über ein nützliches `bounds`-Attribut, das ein `DOMRectReadOnly` zurückgibt, für Fälle, in denen Sie lediglich ein achsenbündiges Begrenzungsrechteck möchten.

## Konstruktor

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : Erstellt ein neues `DOMQuad`-Objekt.

## Instanz-Eigenschaften

- p1,p2,p3,p4 {{ReadOnlyInline}}
  - : sind {{domxref("DOMPoint")}}-Objekte für jede der vier Ecken des `DOMQuad`-Objekts.

## Instanz-Methoden

- {{domxref("DOMQuad.fromRect()")}}
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Satz von Koordinaten zurück.
- {{domxref("DOMQuad.fromQuad()")}}
  - : Gibt ein neues `DOMQuad`-Objekt basierend auf dem übergebenen Satz von Koordinaten zurück.
- {{domxref("DOMQuad.getBounds()")}}
  - : Gibt ein {{domxref("DOMRect")}}-Objekt mit den Koordinaten und Abmessungen des `DOMQuad`-Objekts zurück.
- {{domxref("DOMQuad.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `DOMQuad`-Objekts zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
