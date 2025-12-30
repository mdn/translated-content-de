---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die Sie überwachen können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitszustand der Seite zu betrachten.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis, um den Zuhörern mitzuteilen, dass sich der Zustand der Seite geändert hat. Sie können das Ereignis erkennen und einige Aktionen ausführen oder sich anders verhalten. Zum Beispiel kann Ihre Web-App, wenn sie ein Video abspielt, das Video pausieren, wenn der Benutzer den Tab in den Hintergrund stellt, und es fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seinen Platz im Video, der Soundtrack des Videos interferiert nicht mit dem Ton im neuen Vordergrund-Tab, und der Benutzer verpasst nichts vom Video.

Die Sichtbarkeitszustände eines {{HTMLElement("iframe")}} sind die gleichen wie beim übergeordneten Dokument. Das Verstecken eines `<iframe>` mit CSS-Eigenschaften (wie z.B. {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus und ändert nicht den Zustand des Dokuments innerhalb des Frames.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Webseite hat ein Bilderkarussell, das nicht zum nächsten Bild wechseln soll, wenn der Benutzer die Seite nicht betrachtet.
- Eine Anwendung, die ein Dashboard mit Informationen anzeigt, möchte den Server nicht nach Updates abfragen, wenn die Seite nicht sichtbar ist.
- Eine Seite möchte Töne ausschalten, wenn sich ein Gerät im Standby-Modus befindet (der Benutzer drückt den Netzschalter, um den Bildschirm auszuschalten).

Entwickler haben historisch gesehen unvollkommene Stellvertreter verwendet, um dies zu erkennen. Beispielsweise hilft das Überwachen der [`blur`](/de/docs/Web/API/Window/blur_event) und [`focus`](/de/docs/Web/API/Window/focus_event) Ereignisse im Fenster zu wissen, wann Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite tatsächlich für den Benutzer verborgen ist. Die Page Visibility API greift dieses Problem auf.

> [!NOTE]
> Während [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen sagen, ob der Benutzer Fenster wechselt, bedeutet das nicht unbedingt, dass es verborgen ist. Seiten werden nur versteckt, wenn der Benutzer Tabs wechselt oder das Browserfenster mit dem Tab minimiert.

### Richtlinien zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben Benutzeragenten typischerweise eine Reihe von Richtlinien, um die Leistungsauswirkungen von Hintergrund- oder versteckten Tabs zu mindern. Dazu können gehören:

- Die meisten Browser hören auf, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe an Hintergrund-Tabs oder versteckte {{ HTMLElement("iframe") }}s zu senden, um die Leistung und Akkulaufzeit zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Weitere Details finden Sie unter [Reasons for longer delays than specified](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified).
- Browser implementieren eine budgetbasierte Hintergrund-Timer-Drosselung. Diese funktioniert ähnlich über moderne Browser, mit folgenden Details:
  - In Firefox hat jedes Fenster in Hintergrund-Tabs sein eigenes Zeitbudget in Millisekunden — ein Maximal- und Minimalwert von +50 ms bzw. -150 ms. Chrome ist sehr ähnlich, nur dass das Budget in Sekunden angegeben wird.
  - Fenster unterliegen einer Drosselung nach 30 Sekunden, mit den gleichen Drosselungsverzögerungsregeln, wie sie für Fenster-Timer angegeben sind (siehe [Reasons for longer delays than specified](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timeraufgaben sind nur zulässig, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers ausgeführt wurde, wird die Dauer der Ausführung von seinem Fenster-Timer-Budget abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselungsverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungswirkung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, gelten als Vordergrund und werden nicht gedrosselt.
- Tabs, die Code ausführen, der Echtzeit-Netzwerkverbindungen verwendet ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)), werden nicht gedrosselt, um zu verhindern, dass diese Verbindungen Zeitüberschreitungen erfahren und unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API) Prozesse werden ebenfalls nicht gedrosselt, um Zeitüberschreitungen zu vermeiden.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document) Schnittstelle die folgenden Eigenschaften hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem Zustand ist, der als dem Benutzer verborgen gilt, und ansonsten `false`.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Ein String, der den aktuellen Sichtbarkeitszustand des Dokuments angibt. Mögliche Werte sind:
    - `visible`
      - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die Seite der Vordergrund-Tab eines nicht-minimierten Fensters ist.
    - `hidden`
      - : Der Seiteninhalt ist für den Benutzer nicht sichtbar, entweder weil sich der Tab des Dokuments im Hintergrund befindet oder Teil eines minimierten Fensters ist, oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document) Schnittstelle die folgenden Ereignisse hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder verborgen wurde.

## Beispiele

### Audio beim Verbergen der Seite pausieren

Dieses Beispiel pausiert das Abspielen von Audio, wenn die Seite verborgen wird, und setzt das Abspielen fort, wenn die Seite wieder sichtbar wird.
Die Steuerungen des `<audio>`-Elements erlauben es dem Benutzer, zwischen Abspielen und Pausieren des Audios umzuschalten.
Das boolesche `playingOnHide` wird verwendet, um zu verhindern, dass Audio abgespielt wird, wenn die Seite in einen `sichtbaren` Zustand wechselt, aber das Medium beim Verbergen der Seite nicht abgespielt wurde.

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

{{EmbedLiveSample("Pausing audio on page hide", "", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
