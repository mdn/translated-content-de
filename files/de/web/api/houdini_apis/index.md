---
title: Houdini-APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Reihe von Low-Level-APIs, die Teile der CSS-Engine freilegt und es Entwicklern ermöglicht, CSS zu erweitern, indem sie in den Stil- und Layoutprozess der Rendering-Engine eines Browsers eingreifen. Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) gibt, wodurch sie Code schreiben können, den der Browser als CSS parsen kann, und somit neue CSS-Funktionen erstellen können, ohne darauf warten zu müssen, dass sie nativ in Browsern implementiert werden.

## Vorteile von Houdini

Houdini ermöglicht schnellere Parse-Zeiten als die Verwendung von JavaScript {{domxref("HTMLElement.style")}} für Stiländerungen. Browser parsen das CSSOM – einschließlich Layout-, Paint- und Kompositionsprozesse – bevor sie Stilaktualisierungen anwenden, die in Skripten gefunden werden. Darüber hinaus werden Layout-, Paint- und Kompositionsprozesse für JavaScript-Stilaktualisierungen wiederholt. Houdini-Code wartet nicht darauf, dass dieser erste Rendering-Zyklus abgeschlossen ist. Vielmehr wird er in diesem ersten Zyklus aufgenommen – wodurch rendervorbereitete, verständliche Stile entstehen. Houdini stellt eine objektbasierte API für das Arbeiten mit CSS-Werten in JavaScript bereit.

Houdinis [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist ein CSS Object Model mit Typen und Methoden, das Werte als JavaScript-Objekte freilegt und für intuitivere CSS-Manipulationen sorgt als frühere stringbasierte {{domxref("HTMLElement.style")}}-Manipulationen. Jedes Element und jede Stylesheet-Regel verfügt über eine Stilkarte, die über deren {{domxref("StylePropertyMap")}} zugänglich ist.

Ein Merkmal von CSS Houdini ist der {{domxref("Worklet")}}. Mit Worklets können Sie modulare CSS-Komponenten erstellen, die nur eine einzige Zeile JavaScript erfordern, um konfigurierbare Komponenten zu importieren: keine Präprozessoren, Nachprozessoren oder JavaScript-Frameworks erforderlich.

```js
CSS.paintWorklet.addModule("csscomponent.js");
```

Dieses hinzugefügte Modul enthält {{domxref("PaintWorkletGlobalScope.registerPaint")}}-Funktionen, die vollständig konfigurierbare Worklets registrieren.

> [!NOTE]
> Sie können Ihre eigenen Worklets schreiben oder von anderen Personen erstellte Komponenten installieren.
> Die [Houdini.how](https://houdini.how/)-Website ist eine Sammlung von Worklets,
> mit [Anleitungen zur Verwendung derer](https://houdini.how/usage/).

Die CSS-`paint()`-Funktion ist eine zusätzliche Funktion, die vom {{cssxref("image")}}-Typ unterstützt wird. Sie nimmt Parameter entgegen, die den Namen des Worklets sowie zusätzliche Parameter enthalten, die vom Worklet benötigt werden. Das Worklet hat außerdem Zugriff auf die benutzerdefinierten Eigenschaften des Elements: Sie müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird der `paint()`-Funktion ein Worklet namens `myComponent` übergeben.

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --lowlights: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung!
> Mit Houdini _könnten_ Sie Ihre eigene Masonry-, Grid- oder Region-Implementierung erfinden,
> aber das ist nicht unbedingt die beste Idee.
> Die CSS-Arbeitsgruppe leistet viel Arbeit, um sicherzustellen, dass jede Funktion performant ist,
> alle Randfälle behandelt und Sicherheit, Datenschutz und Zugänglichkeit berücksichtigt.
> Wenn Sie CSS mit Houdini erweitern, denken Sie daran, diese Überlegungen im Hinterkopf zu behalten,
> und starten Sie mit kleinen Projekten, bevor Sie sich ehrgeizigeren Projekten widmen.

## Die Houdini-APIs

Unten finden Sie Links zu den Hauptreferenzseiten, die die unter das Houdini-Dach fallenden APIs abdecken, zusammen mit Links zu Leitfäden, die Ihnen helfen, wenn Sie Anleitung beim Erlernen ihrer Verwendung benötigen.

### CSS Properties and Values API

Definiert eine API zum Registrieren neuer CSS-Eigenschaften. Eigenschaften, die mit dieser API registriert wurden, verfügen über eine Parse-Syntax, die einen Typ, das Vererbungverhalten und einen Anfangswert definiert.

- [CSS Properties and Values API reference](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Properties and Values API guide](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen API von Houdini](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Das Konvertieren von CSSOM-Wert-Strings in sinnvoll getypte JavaScript-Darstellungen und zurück kann einen erheblichen Leistungsaufwand verursachen. Das CSS Typed OM stellt CSS-Werte als getypte JavaScript-Objekte zu Verfügung, um ihre performante Manipulation zu ermöglichen.

- [CSS Typed OM reference](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Typed OM guide](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht die Painting API Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, Rand oder Inhalt eines Elements zeichnen können, mithilfe der `paint()`-CSS-Funktion.

- [CSS Painting API reference](/de/docs/Web/API/CSS_Painting_API)
- [CSS Painting API guide](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulierung von Schlagschatten mit der CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API: Vorhersehbar zufällig sein](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zum Ausführen von Skripten in verschiedenen Stufen der Rendering-Pipeline, unabhängig von der Haupt-JavaScript-Ausführungsumgebung. Worklets sind konzeptionell ähnlich den [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets reference](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht diese API Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben, wie z.B. Masonry oder Zeilen-Snapping.

_Diese API hat in Chrome Canary einige teilweise Unterstützung. Sie ist noch nicht auf MDN dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter freilegt, um beliebige CSS-ähnliche Sprachen in eine leicht typisierte Darstellung zu parsen.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentationen auf MDN._

- [Proposal](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftmetrik freilegt und Zugriff auf typografische Layout-Ergebnisse gibt.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentationen auf MDN._

- [Proposal](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## Siehe auch

- Die [Worklet-Bibliothek](https://houdini.how/) für Beispiele und Code.
- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Ist Houdini schon bereit?](https://houdini.glitch.me/)