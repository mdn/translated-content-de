---
title: Houdini APIs
slug: Web/API/Houdini_APIs
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("Houdini API")}}

Houdini ist eine Reihe von Low-Level-APIs, die Teile der CSS-Engine zugänglich macht und Entwicklern die Möglichkeit bietet, CSS zu erweitern, indem sie in den Styling- und Layout-Prozess der Rendering-Engine eines Browsers eingreifen. Houdini ist eine Gruppe von APIs, die Entwicklern direkten Zugriff auf das [CSS Object Model](/de/docs/Web/API/CSS_Object_Model) (CSSOM) gewähren, wodurch sie Code schreiben können, den der Browser als CSS interpretieren kann, und somit neue CSS-Features erstellen können, ohne darauf zu warten, dass diese nativ in Browsern implementiert werden.

## Vorteile von Houdini

Houdini ermöglicht schnellere Parse-Zeiten als die Verwendung von JavaScript [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) für Stiländerungen. Browser parsen das CSSOM – einschließlich Layout-, Mal- und Kompositionsprozesse – bevor sie Stilanpassungen anwenden, die in Skripten gefunden werden. Zusätzlich werden Layout-, Mal- und Kompositionsprozesse für JavaScript-Stiländerungen wiederholt. Houdini-Code wartet nicht auf diesen ersten Renderzyklus, um abgeschlossen zu sein. Stattdessen ist er in diesem ersten Zyklus enthalten – wodurch renderbare, verständliche Stile erstellt werden. Houdini bietet eine objektbasierte API zur Arbeit mit CSS-Werten in JavaScript.

Houdinis [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist ein CSS-Objektmodell mit Typen und Methoden, das Werte als JavaScript-Objekte bereitstellt, was eine intuitivere CSS-Manipulation ermöglicht als vorherige stringbasierte [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) Manipulationen. Jedes Element und jede Stylesheet-Regel verfügt über eine Stilkarte, die über ihre [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) zugänglich ist.

Ein Merkmal von CSS Houdini ist der [`Worklet`](/de/docs/Web/API/Worklet). Mit Worklets können Sie modulare CSS erstellen, das mit nur einer Zeile JavaScript konfigurierbare Komponenten importiert: Es werden keine Präprozessoren, Postprozessoren oder JavaScript-Frameworks benötigt.

```js
CSS.paintWorklet.addModule("csscomponent.js");
```

Dieses hinzugefügte Modul enthält [`PaintWorkletGlobalScope.registerPaint`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)-Funktionen, die vollständig konfigurierbare Worklets registrieren.

> [!NOTE]
> Sie können Ihre eigenen Worklets schreiben oder von anderen erstellte Komponenten installieren. Die Website [Houdini.how](https://houdini.how/) ist eine Sammlung von Worklets mit [Anleitungen zur Verwendung](https://houdini.how/usage/).

Die CSS-`paint()`-Funktion ist eine zusätzliche Funktion, die durch den {{cssxref("Bild")}}-Typ unterstützt wird. Sie nimmt Parameter entgegen, die den Namen des Worklets sowie zusätzliche Parameter enthalten, die vom Worklet benötigt werden. Das Worklet hat außerdem Zugriff auf die benutzerdefinierten Eigenschaften des Elements: Diese müssen nicht als Funktionsargumente übergeben werden.

Im folgenden Beispiel wird die `paint()`-Funktion mit einem Worklet namens `myComponent` aufgerufen.

```css
li {
  background-image: paint(myComponent, stroke, 10px);
  --highlights: blue;
  --lowlights: green;
}
```

> [!NOTE]
> Mit großer Macht kommt große Verantwortung! Mit Houdini _könnten_ Sie Ihre eigene Implementierung von Masonry, Grid oder Regionen erfinden, aber das ist nicht unbedingt die beste Idee. Die CSS-Arbeitsgruppe leistet viel Arbeit, um sicherzustellen, dass jedes Feature leistungsfähig ist, alle Randfälle behandelt und Aspekte wie Sicherheit, Privatsphäre und Barrierefreiheit berücksichtigt. Wenn Sie CSS mit Houdini erweitern, sollten Sie diese Überlegungen im Auge behalten und mit kleinen Projekten beginnen, bevor Sie zu ehrgeizigeren Projekten übergehen.

## Die Houdini-APIs

Im Folgenden finden Sie Links zu den Hauptreferenzseiten, die die APIs abdecken, die unter den Houdini-Schirm fallen, zusammen mit Links zu Leitfäden, die Ihnen helfen, wenn Sie Anleitung bei der Nutzung von ihnen benötigen.

### CSS Properties and Values API

Definiert eine API zum Registrieren neuer CSS-Eigenschaften. Eigenschaften, die mit dieser API registriert werden, erhalten eine Parse-Syntax, die einen Typ, das Verhaltens der Vererbung und einen Anfangswert definiert.

- [CSS Properties and Values API Referenz](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Properties and Values API Leitfaden](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Intelligentere benutzerdefinierte Eigenschaften mit der neuen API von Houdini](https://web.dev/articles/css-props-and-vals)

### CSS Typed OM

Das Konvertieren von CSSOM-Wert-Strings in bedeutungsvoll getypte JavaScript-Darstellungen und zurück kann einen erheblichen Leistungsaufwand verursachen. Das CSS Typed OM stellt CSS-Werte als typisierte JavaScript-Objekte dar, um deren leistungsfähige Manipulation zu ermöglichen.

- [CSS Typed OM Referenz](/de/docs/Web/API/CSS_Typed_OM_API)
- [CSS Typed OM Leitfaden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Arbeiten mit dem neuen CSS Typed Object Model](https://developer.chrome.com/docs/css-ui/cssom)

### CSS Painting API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht die Painting API Entwicklern, JavaScript-Funktionen zu schreiben, die direkt in den Hintergrund, Rand oder Inhalt eines Elements zeichnen können, über die `paint()`-CSS-Funktion.

- [CSS Painting API Referenz](/de/docs/Web/API/CSS_Painting_API)
- [CSS Painting API Leitfaden](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Paint API](https://developer.chrome.com/blog/paintapi/)
- [Die CSS Paint API](https://css-tricks.com/the-css-paint-api/)
- [Simulierung von Schlagschatten mit der CSS Paint API](https://css-tricks.com/simulating-drop-shadows-with-the-css-paint-api/)
- [CSS Paint API Vorhersehbar zufällig](https://jakearchibald.com/2020/css-paint-predictably-random/)

### Worklets

Eine API zur Ausführung von Skripten in verschiedenen Phasen der Rendering-Pipeline unabhängig von der Haupt-JavaScript-Ausführungsumgebung. Worklets sind konzeptionell ähnlich zu [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) und werden vom Rendering-Engine aufgerufen und erweitert.

- [Worklets Referenz](/de/docs/Web/API/Worklet)

### CSS Layout API

Entwickelt, um die Erweiterbarkeit von CSS zu verbessern, ermöglicht diese API Entwicklern, ihre eigenen Layout-Algorithmen zu schreiben, wie etwa Masonry oder Line Snapping.

_Diese API hat teilweise Unterstützung im Chrome Canary. Sie ist noch nicht auf MDN dokumentiert._

### CSS Parser API

Eine API, die den CSS-Parser direkter freilegt, um beliebige CSS-ähnliche Sprachen in eine leicht getypte Darstellung zu parsen.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/WICG/css-parser-api)

### Font Metrics API

Eine API, die Schriftmetriken zugänglich macht und Zugriff auf typografische Layout-Ergebnisse gibt.

_Diese API ist derzeit ein Vorschlag und hat keine Browser-Implementierungen oder Dokumentation auf MDN._

- [Vorschlag](https://github.com/w3c/css-houdini-drafts/blob/main/font-metrics-api/README.md)

## Siehe auch

- Die [Worklet-Bibliothek](https://houdini.how/) für Beispiele und Code.
- [Interaktive Einführung in Houdini](https://houdini.glitch.me/)
- [Ist Houdini schon bereit?](https://houdini.glitch.me/)
