---
title: VirtualKeyboard-API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

Die VirtualKeyboard-API bietet Entwicklern die Möglichkeit, die Gestaltung ihrer Anwendungen zu verwalten, wenn die virtuelle Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten erscheint und verschwindet, bei denen eine Hardwaretastatur möglicherweise nicht vorhanden ist.

Webbrowser verwalten virtuelle Tastaturen in der Regel selbst, indem sie die Höhe des Viewports anpassen und beim Fokussieren auf Eingabefelder scrollen.

Die Abbildung unten zeigt den Unterschied in der Viewport-Höhe und der Scroll-Position auf einer Webseite, wenn die virtuelle Bildschirmtastatur des Geräts ausgeblendet ist und wenn sie sichtbar ist.

![Zwei Geräte, eines ohne virtuelle Tastatur, das zeigt, dass die Webseite den größten Teil des vertikalen Raums des Geräts nutzen kann, und eines mit virtueller Tastatur, das zeigt, dass die Webseite nur im verbleibenden Raum angezeigt werden kann](viewport-height.png)

Komplexere Anwendungen oder spezifische Geräte wie Mobiltelefone mit mehreren Bildschirmen können mehr Kontrolle über das Layout benötigen, wenn die virtuelle Tastatur erscheint.

Die folgende Abbildung zeigt, was auf einem Gerät mit zwei Bildschirmen passiert, wenn die virtuelle Tastatur nur auf einem der beiden Bildschirme erscheint. Der Viewport wird auf beiden Bildschirmen kleiner, um Platz für die virtuelle Tastatur zu schaffen, wodurch ungenutzter Raum auf dem Bildschirm bleibt, auf dem die virtuelle Tastatur nicht angezeigt wird.

![Ein Gerät mit zwei Bildschirmen, auf dem seine virtuelle Tastatur auf einem Bildschirm angezeigt wird, zeigt, dass die Webseite nur den vertikalen Raum nutzen kann, der nach der Anzeige der Tastatur verbleibt, auch wenn dies leeren Raum auf dem anderen Bildschirm hinterlässt](dual-screen.png)

Die VirtualKeyboard-API kann verwendet werden, um das automatische Verhalten des Browsers bei der Verwaltung der virtuellen Tastatur außer Kraft zu setzen und stattdessen die vollständige Kontrolle darüber zu übernehmen. Mit der VirtualKeyboard-API erscheint und verschwindet die Tastatur weiterhin nach Bedarf, wenn Formularelemente fokussiert werden, aber der Viewport ändert sich nicht und Sie können JavaScript und CSS verwenden, um Ihr Layout anzupassen.

## Konzept

Die VirtualKeyboard-API besteht aus drei Teilen:

- Das {{domxref("VirtualKeyboard")}}-Interface, zugänglich über {{domxref('navigator.virtualKeyboard')}}, wird verwendet, um das automatische Verhalten der virtuellen Tastatur zu deaktivieren, die virtuelle Tastatur programmatisch anzuzeigen oder auszublenden sowie um die aktuelle Position und Größe der virtuellen Tastatur zu erhalten.
- Die CSS-Umgebungsvariablen `keyboard-inset-*` bieten Informationen über die Position und Größe der virtuellen Tastatur.
- Das Attribut [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) gibt an, ob die virtuelle Tastatur auf `contenteditable`-Elementen erscheinen soll.

### Deaktivieren des automatischen Verhaltens der virtuellen Tastatur

Um das automatische Verhalten der virtuellen Tastatur des Browsers zu deaktivieren, verwenden Sie `navigator.virtualKeyboard.overlaysContent = true`. Der Browser wird den Viewport nicht mehr automatisch anpassen, um Platz für die virtuelle Tastatur zu schaffen, die Ihre Inhalte stattdessen überlagern wird.

### Erkennung der Geometrie der virtuellen Tastatur mittels JavaScript

Wenn Sie das Standardverhalten des Browsers außer Kraft gesetzt haben, können Sie die aktuelle Geometrie der virtuellen Tastatur mittels `navigator.virtualKeyboard.boundingRect` ermitteln und das Layout mit CSS und JavaScript entsprechend anpassen. Zusätzlich können Sie auf Geometrieänderungen lauschen, zum Beispiel wenn die Tastatur angezeigt oder ausgeblendet wird, indem Sie das `geometrychange`-Ereignis verwenden.

Dies ist nützlich, um wichtige UI-Elemente in dem Bereich zu positionieren, der nicht von der virtuellen Tastatur überdeckt ist.

Der folgende Codeausschnitt verwendet das `geometrychange`-Ereignis, um zu erkennen, wann sich die Geometrie der virtuellen Tastatur ändert; er greift dann auf die `boundingRect`-Eigenschaft zu, um die Größe und Position der virtuellen Tastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### Verwendung von CSS-Umgebungsvariablen zur Erkennung der Geometrie der virtuellen Tastatur

Die VirtualKeyboard-API stellt auch die folgenden [CSS-Umgebungsvariablen](/de/docs/Web/CSS/env) zur Verfügung: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height`.

Die `keyboard-inset-*` CSS-Umgebungsvariablen sind nützlich, um Ihr Layout an das Erscheinen der virtuellen Tastatur mittels CSS anzupassen. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Viewports. Auch die Variablen `width` und `height` sind bei Bedarf verfügbar.

Der folgende Codeausschnitt verwendet die CSS-Variable `keyboard-inset-height`, um Platz für das Erscheinen der virtuellen Tastatur unterhalb der Nachrichtenliste und des Eingabefelds in einer chatähnlichen Anwendung zu reservieren. Wenn die virtuelle Tastatur ausgeblendet ist, gibt die `env()`-Funktion `0px` zurück und der `keyboard`-Gridbereich wird ausgeblendet. Die Nachrichten- und Eingabeelemente können die volle Höhe des Viewports einnehmen. Wenn die virtuelle Tastatur erscheint, bekommt der `keyboard`-Gridbereich die Höhe der virtuellen Tastatur.

```html
<style>
  body {
    display: grid;
    margin: 0;
    height: 100vh;
    grid-template:
      "messages" 1fr
      "input" auto
      "keyboard" env(keyboard-inset-height, 0px);
  }
</style>
<ul id="messages"></ul>
<input type="text" />
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
</script>
```

### Steuerung der virtuellen Tastatur auf `contenteditable`-Elementen

Standardmäßig führen Elemente mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) dazu, dass die virtuelle Tastatur bei Berührung oder Klick geöffnet wird. In bestimmten Situationen kann es wünschenswert sein, dieses Verhalten zu verhindern und stattdessen die virtuelle Tastatur nach einem anderen Ereignis anzuzeigen.

Setzen Sie das Attribut [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) auf `manual`, um die Standardbehandlung der virtuellen Tastatur im Browser zu verhindern und sie stattdessen selbst zu steuern, indem Sie die `show()`- und `hide()`-Methoden des {{domxref("VirtualKeyboard")}}-Interfaces verwenden.

Der folgende Codeausschnitt zeigt, wie das `virtualkeyboardpolicy`-Attribut und die Methode `navigator.virtualKeyboard.show()` verwendet werden, um die virtuelle Tastatur stattdessen bei einem Doppelklick anzuzeigen:

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;

    const editor = document.getElementById("editor");
    editor.addEventListener("dblclick", () => {
      navigator.virtualKeyboard.show();
    });
  }
</script>
```

## Schnittstellen

- {{domxref('VirtualKeyboard')}} {{experimental_inline}}
  - : Bietet Funktionen, die Tastaturlayoutkarten abrufen und das Erfassen von Tastendrücken der physischen Tastatur umschalten.

## Erweiterungen anderer Schnittstellen

- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Referenz zur {{DOMxRef("VirtualKeyboard")}}-API zurück, um die Bildschirmtastatur zu steuern.
- {{domxref("HTMLElement.virtualkeyboardpolicy")}} {{experimental_inline}}
  - : Ein String, der angibt, ob die virtuelle Tastatur standardmäßig vom Browser angezeigt werden soll, wenn das Element fokussiert wird, oder ob die Anzeige der virtuellen Tastatur manuell gesteuert wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Vollständige Kontrolle mit der VirtualKeyboard-API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
