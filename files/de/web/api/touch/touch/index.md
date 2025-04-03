---
title: "Touch: Touch() Konstruktor"
short-title: Touch()
slug: Web/API/Touch/Touch
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Touch Events")}}

Der **`Touch()`** Konstruktor erzeugt ein neues [`Touch`](/de/docs/Web/API/Touch) Objekt.

## Syntax

```js-nolint
new Touch(options)
```

### Parameter

- `touchInit`

  - : Ein Objekt mit den folgenden Feldern:

    - `identifier`
      - : Ein `long` Wert, der die Identifikationsnummer für den Berührungspunkt darstellt.
    - `target`
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget) Objekt, das Element, bei dem der Berührungspunkt begann, als er erstmals auf die Oberfläche gesetzt wurde.
    - `clientX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, das ist die horizontale Position der Berührung im Client-Fenster des Benutzerbildschirms, ohne Berücksichtigung jeglicher Bildlaufverschiebung.
    - `clientY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, das ist die vertikale Position der Berührung im Client-Fenster des Benutzerbildschirms, ohne Berücksichtigung jeglicher Bildlaufverschiebung.
    - `screenX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, das ist die horizontale Position der Berührung auf dem Bildschirm des Benutzers.
    - `screenY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, das ist die vertikale Position der Berührung auf dem Bildschirm des Benutzers.
    - `pageX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, das ist die horizontale Position der Berührung im Client-Fenster des Benutzerbildschirms, einschließlich jeglicher Bildlaufverschiebung.
    - `pageY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, das ist die vertikale Position der Berührung im Client-Fenster des Benutzerbildschirms, einschließlich jeglicher Bildlaufverschiebung.
    - `radiusX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, das ist der Radius der Ellipse, die den Berührungsbereich (z. B. Finger, Stift) entlang der durch rotationAngle angegebenen Achse am besten umschreibt, in CSS-Pixeln derselben Skala wie screenX; `0`, wenn kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `radiusY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, das ist der Radius der Ellipse, die den Berührungsbereich (z. B. Finger, Stift) entlang der zur durch rotationAngle angegebenen Achse senkrechten Achse am besten umschreibt, in CSS-Pixeln derselben Skala wie screenY; `0`, wenn kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `rotationAngle` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, das ist der Winkel (in Grad), um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn um ihren Mittelpunkt gedreht ist; `0`, wenn kein Wert bekannt ist. Der Wert muss größer oder gleich `0` und kleiner als `90` sein. Wenn die durch radiusX und radiusY beschriebene Ellipse kreisförmig ist, hat rotationAngle keine Auswirkung. Der Benutzeragent kann in diesem Fall `0` als Wert verwenden, oder er kann einen anderen Wert im erlaubten Bereich verwenden. (Zum Beispiel kann der Benutzeragent den rotationAngle-Wert aus dem vorherigen Berührungsereignis verwenden, um plötzliche Änderungen zu vermeiden.).
    - `force` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, das ist der relative Druckwert im Bereich von `0` bis `1`, wobei `0` kein Druck ist und `1` der höchste Druck ist, den das Berührungsgerät erkennen kann; `0`, wenn kein Wert bekannt ist. In Umgebungen, in denen der Druck bekannt ist, kann der absolute Druck, der durch das force-Attribut dargestellt wird, und die Druckempfindlichkeit in Druckstufen variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TouchEvent`](/de/docs/Web/API/TouchEvent), das Interface der Objekte, die es konstruiert.
