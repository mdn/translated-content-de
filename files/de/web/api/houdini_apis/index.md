---
title: Houdini APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: 2a84dea57a0221c582375a28e6960eed7076e442
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Sammlung von Low-Level-APIs, die Teile der CSS-Engine offenlegt und es Entwicklern ermöglicht, CSS zu erweitern, indem sie in den Stil- und Layoutprozess der Rendering-Engine eines Browsers eingreifen. Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) geben und es ihnen ermöglichen, Code zu schreiben, den der Browser als CSS parsen kann, wodurch neue CSS-Funktionen erstellt werden können, ohne auf deren native Implementierung in Browsern warten zu müssen.

## Vorteile von Houdini

Houdini ermöglicht schnellere Parsing-Zeiten als die Verwendung von JavaScript [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) für Stiländerungen. Browser parsen das CSSOM – einschließlich Layout-, Mal- und Kompositionsprozessen – bevor sie sämtliche in Skripten gefundenen Stilaktualisierungen anwenden. Darüber hinaus werden Layout-, Mal- und Kompositionsprozesse für JavaScript-Stilaktualisierungen wiederholt. Houdini-Code wartet nicht darauf, dass der erste Rendering-Zyklus abgeschlossen ist. Stattdessen wird er in diesen ersten Zyklus eingeschlossen – es werden renderbare, verständliche Stile erstellt. Houdini bietet eine objektbasierte API zum Arbeiten mit CSS-Werten in JavaScript.

Houdinis [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist ein CSS Object Model mit Typen und Methoden, die Werte als JavaScript-Objekte offenlegen, was eine intuitivere CSS-Manipulation als frühere, auf Zeichenketten basierende [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Manipulationen ermöglicht. Jedes Element und jede Stylesheet-Regel verfügt über eine Style-Map, die über dessen [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zugänglich ist.

Ein Merkmal von CSS Houdini ist das [`Worklet`](/de/docs/Web/API/Worklet). Mit Worklets können Sie modulare CSS erstellen, das nur eine Zeile JavaScript benötigt, um konfigurierbare Komponenten zu importieren: keine Pre-Prozessoren, Post-Prozessoren oder JavaScript-Frameworks erforderlich.

```js
CSS.paintWorklet.addModule("css-component.js");
```

Dieses hinzugefügte Modul enthält Funktionen wie [`PaintWorkletGlobalScope.registerPaint`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), die vollständig konfigurierbare Worklets registrieren.

Die CSS-Funktion `paint()` ist eine zusätzliche Funktion, die vom {{cssxref("image")}}-Typ unterstützt wird. Sie nimmt Parameter entgegen, die den Namen des Worklets und zusätzliche vom Worklet benötigte Parameter umfassen. Das Worklet hat auch Zugriff auf die benutzerdefinierten Eigenschaften des Elements: Sie müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird der `paint()`-Funktion ein Worklet namens `myComponent` übergeben.

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --theme: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung! Mit Houdini _könnten_ Sie Ihre eigene Masonry-, Grid- oder Regions-Implementierung erfinden, aber das ist nicht unbedingt die beste Idee. Die CSS-Arbeitsgruppe tut viel Arbeit, um sicherzustellen, dass jede Funktion leistungsfähig ist, alle Randfälle behandelt und Sicherheit, Datenschutz und Zugänglichkeit berücksichtigt. Wenn Sie CSS mit Houdini erweitern, sollten Sie diese Überlegungen im Kopf behalten und klein anfangen, bevor Sie sich ehrgeizigeren Projekten zuwenden.

## Die Houdini-APIs

Hier finden Sie Links zu den Hauptreferenzseiten, die die unter das Houdini-Dach fallenden APIs abdecken, zusammen mit Links zu Leitfäden, die Ihnen helfen, wenn Sie Hilfe beim Erlernen ihrer Verwendung benötigen.

### CSS-Properties and Values API

Definiert eine API zur Registrierung neuer CSS-Eigenschaften. Eigenschaften, die mit dieser API registriert werden, erhalten eine Parse-Syntax, die einen Typ, das Vererbungsverhalten und einen Anfangswert definiert.

- [CSS Properties and Values API reference](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Properties and Values API guide](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen Houdini-API](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Die Konvertierung von CSSOM-Wertzeichenketten in sinnvoll typisierte JavaScript-Darstellungen und zurück kann zu erheblichen Leistungseinbußen führen. Das CSS Typed OM stellt CSS-Werte als getypte JavaScript-Objekte bereit, um deren effiziente Manipulation zu ermöglichen.

- [CSS Typed OM reference](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Typed OM guide](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht die Painting-API Entwicklern das Schreiben von JavaScript-Funktionen, die direkt in den Hintergrund, die Umrandung oder den Inhalt eines Elements zeichnen können über die `paint()`-CSS-Funktion.

- [CSS Painting API reference](/de/docs/Web/API/CSS_Painting_API)
- [CSS Painting API guide](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulierung von Schlagschatten mit der CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API Sein vorhersehbar zufällig](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zum Ausführen von Skripten in verschiedenen Phasen der Rendering-Pipeline, unabhängig von der Haupt-JavaScript-Ausführungsumgebung. Worklets sind konzeptionell ähnlich wie [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets reference](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht diese API Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben, wie Masonry oder Zeilen-Snapping.

_Diese API hat eine teilweise Unterstützung im Chrome Canary. Es ist noch nicht auf MDN dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter offenlegt, um beliebige CSS-ähnliche Sprachen in eine leicht typisierte Darstellung zu parsen.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentation auf MDN._

- [Proposal](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftmetriken bereitstellt und Zugriff auf typografische Layout-Ergebnisse bietet.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentation auf MDN._

- [Proposal](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## Siehe auch

- [Ein praktischer Überblick über CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen Houdini-API](https://web.dev/articles/css-props-and-vals)
