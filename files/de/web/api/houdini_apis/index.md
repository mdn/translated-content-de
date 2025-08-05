---
title: Houdini-APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Sammlung von Low-Level-APIs, die Teile der CSS-Engine offenlegt, um Entwicklern die Möglichkeit zu geben, CSS zu erweitern, indem sie sich in den Styling- und Layoutprozess der Rendering-Engine eines Browsers einklinken. Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) gewährt, sodass Entwickler Code schreiben können, den der Browser als CSS parsen kann, und somit neue CSS-Funktionen erstellen, ohne darauf warten zu müssen, dass diese native in Browsern implementiert werden.

## Vorteile von Houdini

Houdini ermöglicht schnellere Parsing-Zeiten als die Verwendung von JavaScript [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) für Stiländerungen. Browser parsen das CSSOM — einschließlich Layout-, Mal- und Kompositionsprozessen — bevor sie Stilaktualisierungen aus Skripten anwenden. Darüber hinaus werden Layout-, Mal- und Kompositionsprozesse für JavaScript-Stilaktualisierungen wiederholt. Houdini-Code wartet nicht darauf, dass der erste Rendering-Zyklus abgeschlossen ist. Vielmehr wird er in diesen ersten Zyklus aufgenommen und erzeugt darstellbare, verständliche Stile. Houdini bietet eine objektbasierte API zum Arbeiten mit CSS-Werten in JavaScript.

Houdini's [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist ein CSS-Objektmodell mit Typen und Methoden, die Werte als JavaScript-Objekte bereitstellen und damit intuitivere CSS-Manipulationen als vorherige, auf Zeichenfolgen basierende [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Manipulationen ermöglichen. Jedes Element und jede Regel im Stylesheet hat eine Stilkarte, die über ihre [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zugänglich ist.

Ein Feature von CSS Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet). Mit Worklets können Sie modulare CSS erstellen, das nur eine einzige Zeile JavaScript benötigt, um konfigurierbare Komponenten zu importieren: Keine Pre-Prozessoren, Post-Prozessoren oder JavaScript-Frameworks erforderlich.

```js
CSS.paintWorklet.addModule("css-component.js");
```

Dieses hinzugefügte Modul enthält [`PaintWorkletGlobalScope.registerPaint`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)-Funktionen, die vollständig konfigurierbare Worklets registrieren.

Die CSS-`paint()`-Funktion ist eine zusätzliche Funktion, die vom {{cssxref("image")}}-Typ unterstützt wird. Sie nimmt Parameter entgegen, die den Namen des Worklets sowie zusätzliche vom Worklet benötigte Parameter umfassen. Das Worklet hat zudem Zugriff auf die benutzerdefinierten Eigenschaften des Elements: Diese müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird der `paint()`-Funktion ein Worklet namens `my-component` übergeben.

```css
li {
  background-image: paint(my-component, stroke, 10px);
  --highlights: blue;
  --theme: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung!
> Mit Houdini _könnten_ Sie Ihre eigene Mauerwerk-, Gitter- oder Regionen-Implementierung entwickeln, aber das ist nicht unbedingt die beste Idee. Die CSS-Arbeitsgruppe leistet viel Arbeit, um sicherzustellen, dass jede Funktion leistungsfähig ist, alle Randfälle abdeckt und Sicherheit, Datenschutz und Zugänglichkeit berücksichtigt. Wenn Sie CSS mit Houdini erweitern, achten Sie darauf, diese Überlegungen zu berücksichtigen und klein anzufangen, bevor Sie sich an ehrgeizigere Projekte wagen.

## Die Houdini-APIs

Im Folgenden finden Sie Links zu den Hauptreferenzseiten, die die APIs abdecken, die unter das Houdini-Dach fallen, zusammen mit Links zu Leitfäden, die Ihnen helfen, wenn Sie Anleitung in ihrer Verwendung benötigen.

### CSS Properties and Values API

Definiert eine API zum Registrieren neuer CSS-Eigenschaften. Eigenschaften, die mit dieser API registriert werden, werden mit einer Parsing-Syntax versehen, die einen Typ, das Vererbungsverhalten und einen Startwert definiert.

- [CSS Properties and Values API Referenz](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Properties and Values API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Das Umwandeln von CSSOM-Wertezeichenfolgen in bedeutungsvolle, typisierte JavaScript-Darstellungen und zurück kann einen erheblichen Leistungsaufwand verursachen. Die CSS Typed OM stellt CSS-Werte als typisierte JavaScript-Objekte bereit, um deren performante Manipulation zu ermöglichen.

- [CSS Typed OM Referenz](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Typed OM Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht die Painting-API Entwicklern das Schreiben von JavaScript-Funktionen, die direkt in den Hintergrund, den Rand oder den Inhalt eines Elements über die `paint()`-CSS-Funktion zeichnen können.

- [CSS Painting API Referenz](/de/docs/Web/API/CSS_Painting_API)
- [CSS Painting API Leitfaden](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulation von Schatten mit der CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API: Vorhersehbar zufällig sein](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zum Ausführen von Skripten in verschiedenen Phasen der Rendering-Pipeline unabhängig von der Haupt-JavaScript-Ausführungsumgebung. Worklets sind konzeptionell ähnlich wie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets Referenz](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht diese API Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben, wie zum Beispiel Mauerwerk oder Zeilenfang.

_Diese API hat eine teilweise Unterstützung in Chrome Canary. Sie ist noch nicht auf MDN dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter offenlegt, um beliebige CSS-ähnliche Sprachen in eine schwach typisierte Darstellung zu parsen.

_Diese API ist derzeit ein Vorschlag und hat keine Browserimplementierungen oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftmetrik offenlegt und Zugriff auf typografische Layout-Ergebnisse gibt.

_Diese API ist derzeit ein Vorschlag und hat keine Browserimplementierungen oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit Houdinis neuer API](https://web.dev/articles/css-props-and-vals)
