---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die Sie überwachen können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu überprüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) Ereignis, um die Listener darüber zu informieren, dass sich der Status der Seite geändert hat. Sie können das Ereignis erkennen und einige Aktionen ausführen oder anders verhalten. Zum Beispiel, wenn Ihre Webanwendung ein Video abspielt, kann sie das Video pausieren, wenn der Benutzer den Tab in den Hintergrund verschiebt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seine Position im Video, der Soundtrack des Videos stört nicht den Ton im neuen Vordergrund-Tab, und der Benutzer verpasst in der Zwischenzeit nichts vom Video.

Die Sichtbarkeitszustände eines {{HTMLElement("iframe")}} sind die gleichen wie die des übergeordneten Dokuments. Das Verbergen eines `<iframe>` mithilfe von CSS-Eigenschaften (wie {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus und verändert nicht den Status des im Frame enthaltenen Dokuments.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Seite hat ein Bilderkarussell, das nicht zum nächsten Slide wechseln sollte, es sei denn, der Benutzer betrachtet die Seite.
- Eine Anwendung, die ein Dashboard mit Informationen anzeigt, möchte den Server nicht nach Updates abfragen, wenn die Seite nicht sichtbar ist.
- Eine Seite möchte Töne ausschalten, wenn ein Gerät im Standby-Modus ist (Benutzer drückt die Power-Taste, um den Bildschirm auszuschalten).

Entwickler haben historisch gesehen unvollkommene Proxies verwendet, um dies zu erkennen. Zum Beispiel das Überwachen von [`blur`](/de/docs/Web/API/Window/blur_event) und [`focus`](/de/docs/Web/API/Window/focus_event) Ereignissen auf dem Fenster hilft Ihnen zu wissen, wann Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite dem Benutzer tatsächlich verborgen ist. Die Page Visibility API behandelt dies.

> [!NOTE]
> Während [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen sagen, ob der Benutzer Fenster wechselt, bedeutet das nicht unbedingt, dass es ausgeblendet ist. Seiten werden nur verborgen, wenn der Benutzer Tabs wechselt oder das Browserfenster mit dem Tab minimiert.

### Richtlinien zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben User Agents in der Regel eine Reihe von Richtlinien implementiert, um die Leistungsbelastung durch Hintergrund- oder ausgeblendete Tabs zu mindern. Diese können umfassen:

- Die meisten Browser senden keine [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe an Hintergrund-Tabs oder ausgeblendete {{HTMLElement("iframe")}}, um die Leistung und die Akkulaufzeit zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/SetTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) für mehr Details.
- Browser implementieren eine auf Budget basierende Hintergrund-Timeout-Drosselung. Diese funktioniert auf ähnliche Weise über moderne Browser hinweg, mit folgenden Details:

  - In Firefox haben Fenster in Hintergrund-Tabs jeweils ihr eigenes Zeitbudget in Millisekunden – ein Maximum und ein Minimum von +50 ms und -150 ms. Chrome ist sehr ähnlich, außer dass das Budget in Sekunden angegeben wird.
  - Fenster werden nach 30 Sekunden gedrosselt, mit denselben Drosselungsverzögerungsregeln wie für Fenstertimer (siehe erneut [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timer-Aufgaben sind nur zulässig, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers ausgeführt wurde, wird die Dauer der Ausführung von seinem Fenstertimeout-Budget subtrahiert.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselungsverhalten ausgeschlossen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungsbelastung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, werden als Vordergrund betrachtet und nicht gedrosselt.
- Tabs, die Code ausführen, der Echtzeit-Netzwerkverbindungen verwendet ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)) bleiben undrosselt, um zu vermeiden, dass diese Verbindungen bei Zeitüberschreitungen unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API) Prozesse werden ebenfalls nicht gedrosselt, um Zeitüberschreitungen zu vermeiden.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt die folgenden Eigenschaften zur [`Document`](/de/docs/Web/API/Document) Schnittstelle hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem Zustand ist, der als dem Benutzer verborgen angesehen wird, und `false` sonst.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}

  - : Ein String, der den aktuellen Sichtbarkeitszustand des Dokuments angibt. Mögliche Werte sind:

    - `visible`
      - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die Seite der Vordergrund-Tab eines nicht minimierten Fensters ist.
    - `hidden`
      - : Der Inhalt der Seite ist für den Benutzer nicht sichtbar, entweder weil der Tab des Dokuments im Hintergrund ist oder Teil eines minimierten Fensters oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt die folgenden Ereignisse zur [`Document`](/de/docs/Web/API/Document) Schnittstelle hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder verborgen wurde.

## Beispiele

### Audio pausieren bei Seitenverbergen

Dieses Beispiel pausiert die Audio-Wiedergabe, wenn die Seite verborgen ist, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird. Die `<audio>`-Element-Steuerungen ermöglichen es dem Benutzer, zwischen Wiedergabe und Pause zu wechseln. Das boolesche `playingOnHide` wird verwendet, um zu verhindern, dass Audio spielt, wenn die Seite in einen `visible`-Status wechselt, aber das Medium nicht bei Seitenverbergen gespielt wurde.

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
  } else {
    // Page became visible! Resume playing if audio was "playing on hide"
    if (playingOnHide) {
      audio.play();
    }
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
- [PerformanceEventTiming: Reporting the First Input Delay (FID)](/de/docs/Web/API/PerformanceEventTiming#reporting_the_first_input_delay_fid)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
