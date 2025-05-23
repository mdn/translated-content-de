---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die Sie beobachten können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu überprüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Verwendung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis, um den Listenern mitzuteilen, dass sich der Status der Seite geändert hat. Sie können das Ereignis erfassen und daraufhin bestimmte Aktionen ausführen oder sich anders verhalten. Zum Beispiel kann eine Web-App, die ein Video abspielt, das Video pausieren, wenn der Benutzer den Tab in den Hintergrund setzt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seine Position im Video, der Soundtrack des Videos stört nicht die Audio-Wiedergabe im neuen Vordergrundtab, und der Benutzer verpasst keinen Teil des Videos währenddessen.

Sichtbarkeitszustände eines {{HTMLElement("iframe")}} entsprechen denen des übergeordneten Dokuments. Das Verbergen eines `<iframe>` mittels CSS-Eigenschaften (wie {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus und ändert nicht den Status des im Frame enthaltenen Dokuments.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Website hat ein Bildkarussell, das nicht zum nächsten Slide wechseln sollte, es sei denn, der Benutzer betrachtet die Seite.
- Eine Anwendung, die ein Dashboard mit Informationen anzeigt, möchte den Server nicht abfragen, wenn die Seite nicht sichtbar ist.
- Eine Website möchte Klänge ausschalten, wenn sich ein Gerät im Standby-Modus befindet (der Benutzer drückt den Power-Button, um den Bildschirm auszuschalten).

Entwickler haben in der Vergangenheit unvollkommene Stellvertreter verwendet, um dies zu erkennen. Zum Beispiel hilft das Beobachten der [`blur`](/de/docs/Web/API/Window/blur_event) und [`focus`](/de/docs/Web/API/Window/focus_event) Ereignisse im Fenster zu erkennen, wann Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite für den Benutzer tatsächlich verborgen ist. Die Page Visibility API behebt dieses Problem.

> [!NOTE]
> Während [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen anzeigen, ob der Benutzer Fenster wechselt, bedeutet das nicht unbedingt, dass es verborgen ist. Seiten werden nur dann verborgen, wenn der Benutzer Tabs wechselt oder das Browserfenster, das den Tab enthält, minimiert.

### Politiken zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben Benutzeragenten in der Regel eine Reihe von Richtlinien, um die Leistungsauswirkungen von Hintergrund- oder verborgenen Tabs zu mildern. Diese können umfassen:

- Die meisten Browser hören auf, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe an Hintergrundtabs oder verborgene {{HTMLElement("iframe")}}s zu senden, um die Leistung und Akkulaufzeit zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Siehe [Gründe für Verzögerungen, die länger als angegeben sind](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für weitere Details.
- Browser implementieren budgetbasierte Hintergrund-Timeout-Drosselung. Dies erfolgt in ähnlicher Weise über moderne Browser hinweg, mit den folgenden Details:

  - In Firefox haben Fenster in Hintergrundtabs jeweils ihr eigenes Zeitbudget in Millisekunden — ein Maximum und ein Minimum von +50 ms und -150 ms, respektive. Chrome ist sehr ähnlich, außer dass das Budget in Sekunden angegeben wird.
  - Fenster werden nach 30 Sekunden gedrosselt, mit den gleichen Drosselungsverzögerungsregeln wie für Fenstertimer angegeben (siehe erneut [Gründe für Verzögerungen, die länger als angegeben sind](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timer-Aufgaben sind nur erlaubt, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers ausgeführt wurde, wird die dafür aufgewendete Zeitdauer von seinem Fenster-Timeout-Budget abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselungsverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungsbelastung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, gelten als Vordergrund und werden nicht gedrosselt.
- Tabs, in denen Code mit Echtzeit-Netzwerkverbindungen ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)) ausgeführt wird, werden nicht gedrosselt, um ein Timing-Out und unerwartetes Schließen dieser Verbindungen zu vermeiden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API) Prozesse werden ebenfalls ungedrosselt belassen, um Zeitüberschreitungen zu vermeiden.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document) Schnittstelle die folgenden Eigenschaften hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem für den Benutzer als verborgen erachteten Zustand ist, und `false` andernfalls.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}

  - : Ein String, der den aktuellen Sichtbarkeitsstatus des Dokuments angibt. Mögliche Werte sind:

    - `visible`
      - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die Seite der Vordergrundtab eines nicht-minimierten Fensters ist.
    - `hidden`
      - : Der Seiteninhalt ist dem Benutzer nicht sichtbar, entweder weil der Tab des Dokuments im Hintergrund ist oder Teil eines minimierten Fensters, oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document) Schnittstelle die folgenden Ereignisse hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder verborgen wurde.

## Beispiele

### Audio pausieren beim Verbergen der Seite

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite verborgen wird, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird. Die Steuerungsfunktionen des `<audio>`-Elements ermöglichen es dem Benutzer, zwischen der Wiedergabe und dem Pausieren des Audios zu wechseln. Das Boolean-Element `playingOnHide` wird verwendet, um zu verhindern, dass Audio abgespielt wird, wenn die Seite in einen `visible`-Status wechselt, aber die Medien bei der Seitenverbergung nicht abgespielt wurden.

```css hidden
audio {
  width: 100%;
}
```

#### HTML

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>
```

#### JavaScript

```js
const audio = document.querySelector("audio");

let playingOnHide = false;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    playingOnHide = !audio.paused;
    audio.pause();
  } else if (playingOnHide) {
    // Page became visible! Resume playing if audio was "playing on hide"
    audio.play();
  }
});
```

#### Ergebnis

{{EmbedLiveSample("Audio pausieren beim Verbergen der Seite", "", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [Sichtbarkeit von Elementen zeitlich mit der Intersection Observer API steuern](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
