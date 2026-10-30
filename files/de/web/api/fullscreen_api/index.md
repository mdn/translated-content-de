---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 9740186550ed818e727ecc9906b499cdbe951cfc
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen API** stellt Methoden bereit, mit denen ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und seine Nachfahren) im Vollbildmodus angezeigt und der Vollbildmodus wieder beendet werden kann, wenn er nicht mehr benötigt wird.
So lassen sich gewünschte Inhalte – etwa ein Onlinespiel – auf dem gesamten Bildschirm des Benutzers anzeigen. Dabei werden alle Elemente der Browseroberfläche und andere Anwendungen vom Bildschirm ausgeblendet, bis der Vollbildmodus beendet wird.

Weitere Informationen zur Verwendung der API finden Sie im Artikel [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide).

## Schnittstellen

_Die Fullscreen API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen um die Methoden, Eigenschaften und Event-Handler, die für die Vollbildfunktion benötigt werden. Diese werden in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen API ergänzt die Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) um Methoden zum Aktivieren und Beenden des Vollbildmodus.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "User Agent")}} auf, vom Vollbildmodus in den Fenstermodus zurückzukehren. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet wurde.

### Instanzmethoden der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User Agent auf, das angegebene Element (und damit auch seine Nachfahren) im Vollbildmodus anzuzeigen. Dabei werden alle Elemente der Browseroberfläche sowie andere Anwendungen vom Bildschirm ausgeblendet. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im DOM (oder Shadow DOM) im Vollbildmodus angezeigt wird.
    Ist der Wert `null`, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob der Vollbildmodus aktiviert werden kann.
    Ihr Wert ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (etwa weil die Funktion `"fullscreen"` nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Ein boolescher Wert, der `true` ist, wenn im Dokument derzeit ein Element im Vollbildmodus angezeigt wird; andernfalls gibt die Eigenschaft `false` zurück.

    > [!NOTE]
    > Verwenden Sie stattdessen die Eigenschaft [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) von [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot). Ist ihr Wert nicht `null`, verweist sie auf ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den Vollbildmodus wechselt oder ihn verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn beim Versuch, es in den Vollbildmodus zu versetzen oder diesen zu beenden, ein Fehler auftritt.

## Sicherheitsaspekte

Zum Aktivieren des Vollbildmodus ist eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) erforderlich: Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion verwendet werden kann.

Der Vollbildmodus wird durch die [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}} gesteuert.

Die Standard-Allowlist für `fullscreen` ist `self`.
Damit ist die Verwendung des Vollbildmodus in verschachtelten Frames derselben Origin möglich, in Inhalten von Drittanbietern jedoch nicht.
Um die Verwendung durch einen Drittanbieter zu ermöglichen, muss der Server zunächst mit dem `Permissions-Policy`-Header einer bestimmten Drittanbieter-Origin die Berechtigung erteilen.

```http
Permissions-Policy: fullscreen=(self "https://b.example.com")
```

Anschließend muss das Attribut `allow="fullscreen"` zum Frame-Container-Element für Quellen dieser Origin hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

Mit der `fullscreen`-Berechtigung der [Permissions API](/de/docs/Web/API/Permissions_API) lässt sich prüfen, ob der Zugriff auf den Vollbildmodus `granted`, `denied` oder `prompt` ist (eine Bestätigung durch den Benutzer erfordert).

## Beispiele

### Einfache Verwendung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite angezeigt. Durch Drücken der <kbd>Eingabetaste</kbd> kann der Benutzer zwischen der Anzeige im Fenster und im Vollbildmodus wechseln.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Auf die Eingabetaste reagieren

Beim Laden der Seite wird dieser Code ausgeführt, um einen Event-Listener einzurichten, der auf die <kbd>Eingabetaste</kbd> reagiert.

```js
const video = document.getElementById("video");

// On pressing ENTER call toggleFullScreen method
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen(video);
  }
});
```

#### Zwischen Fenster- und Vollbildmodus wechseln

Dieser Code wird vom obigen Event-Handler aufgerufen, wenn der Benutzer die <kbd>Eingabetaste</kbd> drückt.

```js
function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    document.exitFullscreen?.();
  }
}
```

Zunächst wird der Wert des Attributs `fullscreenElement` von [`document`](/de/docs/Web/API/Document) geprüft. Ist der Wert `null`, befindet sich das Dokument derzeit im Fenstermodus und muss in den Vollbildmodus wechseln. Andernfalls verweist der Wert auf das Element, das derzeit im Vollbildmodus angezeigt wird. Der Wechsel in den Vollbildmodus erfolgt durch Aufrufen von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

Ist der Vollbildmodus bereits aktiv (`fullscreenElement` ist nicht `null`), rufen wir [`exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf `document` auf, um den Vollbildmodus zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
