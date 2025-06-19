---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard-API gibt Entwicklern die Kontrolle über das Layout ihrer Anwendungen, wenn die Bildschirm-Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, erscheint und verschwindet.

Webbrowser verwalten Bildschirm-Tastaturen in der Regel selbst, indem sie die Höhe des Ansichtsfensters anpassen und zu Eingabefeldern scrollen, wenn diese fokussiert sind.

Die folgende Abbildung veranschaulicht den Unterschied in der Höhe des Ansichtsfensters und der Scrollposition einer Webseite, wenn die Bildschirm-Tastatur des Geräts verborgen bzw. angezeigt ist.

![Zwei Geräte, eines ohne Bildschirm-Tastatur, das zeigt, dass die Webseite den größten Teil des vertikalen Raums des Geräts nutzen kann, und eines mit Bildschirm-Tastatur, das zeigt, dass die Webseite nur im verbleibenden Raum angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezielle Geräte wie Multi-Screen-Mobiltelefone können mehr Kontrolle über das Layout erfordern, wenn die Bildschirm-Tastatur erscheint.

Die folgende Abbildung zeigt, was bei einem Gerät mit zwei Bildschirmen passiert, wenn die Bildschirm-Tastatur nur auf einem der beiden Bildschirme erscheint. Das Ansichtsfenster wird auf beiden Bildschirmen kleiner, um Platz für die Bildschirm-Tastatur zu schaffen, was zu ungenutztem Raum auf dem Bildschirm führt, auf dem die Bildschirm-Tastatur nicht angezeigt wird.

![Ein Gerät mit zwei Bildschirmen, bei dem die Bildschirm-Tastatur auf einem Bildschirm angezeigt wird, zeigt, dass die Webseite nur den vertikalen Raum nutzen kann, der verbleibt, nachdem die Tastatur angezeigt wurde, auch wenn das leeren Raum auf dem anderen Bildschirm hinterlässt](dual-screen.png)

Die VirtualKeyboard-API kann verwendet werden, um sich von der automatischen Handhabung der Bildschirm-Tastatur durch den Browser abzumelden und stattdessen die vollständige Kontrolle darüber zu übernehmen. Mit der VirtualKeyboard-API erscheint und verschwindet die Tastatur weiterhin wie erforderlich, wenn Formularelemente fokussiert werden, aber das Ansichtsfenster ändert sich nicht und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard-API besteht aus drei Teilen:

- Das [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interface, das über [`navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) aufgerufen wird, um sich von dem automatischen Verhalten der Bildschirm-Tastatur abzumelden, die Bildschirm-Tastatur programmatisch zu zeigen oder zu verbergen sowie um die aktuelle Position und Größe der Bildschirm-Tastatur abzurufen.
- Die `keyboard-inset-*` CSS-Umgebungsvariablen liefern Informationen über die Position und Größe der Bildschirm-Tastatur.
- Das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy)-Attribut gibt an, ob die Bildschirm-Tastatur bei `contenteditable`-Elementen erscheinen soll.

### Abmelden vom automatischen Verhalten der Bildschirm-Tastatur

Um sich vom automatischen Verhalten der Bildschirm-Tastatur des Browsers abzumelden, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser wird dann nicht mehr automatisch die Größe des Ansichtsfensters anpassen, um Platz für die Bildschirm-Tastatur zu schaffen, die stattdessen Ihren Inhalt überlagert.

### Erkennung der Geometrie der Bildschirm-Tastatur mit JavaScript

Sobald Sie sich vom Standardverhalten des Browsers abgemeldet haben, können Sie die aktuelle Geometrie der Bildschirm-Tastatur mit `navigator.virtualKeyboard.boundingRect` abrufen und das Layout entsprechend mit CSS und JavaScript anpassen. Zusätzlich können Sie Änderungen an der Geometrie, wie das Anzeigen oder Verbergen der Tastatur, mit dem `geometrychange`-Ereignis überwachen.

Dies ist nützlich, um wichtige UI-Elemente in dem Bereich zu positionieren, der nicht von der Bildschirm-Tastatur überdeckt wird.

Der folgende Code-Schnipsel verwendet das `geometrychange`-Ereignis, um zu erkennen, wann sich die Geometrie der Bildschirm-Tastatur ändert; er greift dann auf die `boundingRect`-Eigenschaft zu, um die Größe und Position der Bildschirm-Tastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Erkennung der Geometrie der Bildschirm-Tastatur mit CSS-Umgebungsvariablen

Die VirtualKeyboard-API stellt auch die folgenden [CSS-Umgebungsvariablen](/de/docs/Web/CSS/env) bereit: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout an das Erscheinen der Bildschirm-Tastatur mit CSS anzupassen. Sie definieren ein Rechteck durch seine Ober-, Rechts-, Unter- und Linkseintragungen vom Rand des Ansichtsfensters. Die Variablen `width` und `height` sind ebenfalls verfügbar, wenn erforderlich.

Der folgende Code-Schnipsel nutzt die CSS-Variable `keyboard-inset-height`, um Platz für das Erscheinen der Bildschirm-Tastatur unter der Nachrichtenliste und dem Eingabefeld in einer chatartigen Anwendung zu reservieren. Wenn die Bildschirm-Tastatur verborgen ist, gibt die `env()`-Funktion `0px` zurück und der `keyboard`-Rasterbereich wird ausgeblendet. Die Nachrichten- und Eingabeelemente können die volle Höhe des Ansichtsfensters einnehmen. Wenn die Bildschirm-Tastatur erscheint, erhält der `keyboard`-Rasterbereich die Höhe der Bildschirm-Tastatur.

```html
<ul id="messages"></ul>
<input type="text" />
```

```css
body {
  display: grid;
  margin: 0;
  height: 100vh;
  grid-template:
    "messages" 1fr
    "input" auto
    "keyboard" env(keyboard-inset-height, 0px);
}
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;
}
```

### Kontrolle der Bildschirm-Tastatur bei `contenteditable`-Elementen

Standardmäßig lösen Elemente, die das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut verwenden, ebenfalls die Bildschirm-Tastatur aus, wenn sie angetippt oder angeklickt werden. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und stattdessen die Bildschirm-Tastatur erst nach einem anderen Ereignis anzuzeigen.

Setzen Sie das [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy)-Attribut auf `manual`, um die Standardbehandlung der Bildschirm-Tastatur im Browser zu verhindern und sie stattdessen selbst mithilfe der `show()`- und `hide()`-Methoden des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces zu steuern.

Der folgende Code-Schnipsel zeigt, wie das `virtualkeyboardpolicy`-Attribut und die Methode `navigator.virtualKeyboard.show()` verwendet wird, um die Bildschirm-Tastatur stattdessen bei einem Doppelklick anzuzeigen:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  const editor = document.getElementById("editor");
  editor.addEventListener("dblclick", () => {
    navigator.virtualKeyboard.show();
  });
}
```

## Schnittstellen

- [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard) {{experimental_inline}}
  - : Bietet Funktionen, die Layoutkarten der Tastatur abrufen und das Erfassen von Tastendrucken der physischen Tastatur umschalten.

## Erweiterungen auf andere Schnittstellen

- [`Navigator.virtualKeyboard`](/de/docs/Web/API/Navigator/virtualKeyboard) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Referenz auf die [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-API zurück, um die Bildschirm-Tastatur zu steuern.
- [`HTMLElement.virtualkeyboardpolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{experimental_inline}}
  - : Ein String, der angibt, ob die Standardeinstellung des Browsers für das Anzeigen der Bildschirm-Tastatur verwendet werden soll, wenn das Element fokussiert ist, oder ob das Anzeigen der Bildschirm-Tastatur manuell gesteuert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Volle Kontrolle mit der VirtualKeyboard-API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
