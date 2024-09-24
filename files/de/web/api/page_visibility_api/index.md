---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die Sie nutzen können, um zu wissen, wann ein Dokument sichtbar oder verborgen wird. Außerdem bietet sie Funktionen, um den aktuellen Sichtbarkeitszustand der Seite zu überprüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig durch ein anderes Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis, um Listener darüber zu informieren, dass sich der Zustand der Seite geändert hat. Sie können das Ereignis erkennen und einige Aktionen durchführen oder sich anders verhalten. Zum Beispiel kann Ihre Webanwendung, die ein Video abspielt, das Video anhalten, wenn der Benutzer den Tab in den Hintergrund stellt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seinen Platz im Video, der Soundtrack des Videos stört nicht den Ton im neuen Vordergrund-Tab und der Benutzer verpasst nichts vom Video in der Zwischenzeit.

Die Sichtbarkeitszustände eines {{HTMLElement("iframe")}} sind die gleichen wie die des übergeordneten Dokuments. Das Verbergen eines `<iframe>` durch CSS-Eigenschaften (wie {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus oder ändert den Zustand des Dokuments innerhalb des Rahmens.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Webseite mit einem Bildkarussell sollte nicht zum nächsten Bild wechseln, wenn der Benutzer die Seite nicht ansehen kann.
- Eine Anwendung, die ein Informations-Dashboard zeigt, möchte den Server nicht nach Updates abfragen, wenn die Seite nicht sichtbar ist.
- Eine Webseite möchte Töne ausschalten, wenn ein Gerät im Standby-Modus ist (Benutzer drückt die Taste, um den Bildschirm auszuschalten).

Entwickler haben historisch gesehen unvollkommene Proxys verwendet, um dies zu erkennen. Beispielsweise helfen das Beobachten von [`blur`](/de/docs/Web/API/Window/blur_event) und [`focus`](/de/docs/Web/API/Window/focus_event)-Ereignissen auf dem Fenster, zu wissen, wann Ihre Seite nicht die aktive Seite ist, aber sie sagt Ihnen nicht, dass Ihre Seite tatsächlich für den Benutzer verborgen ist. Die Page Visibility API adressiert dieses Problem.

> [!NOTE]
> Während [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen mitteilen, wenn der Benutzer die Fenster wechselt, heißt das nicht unbedingt, dass es ausgeblendet ist. Seiten werden nur dann verborgen, wenn der Benutzer die Tabs wechselt oder das Fenster mit dem Tab minimiert.

### Richtlinien zur Unterstützung der Leistung von Seiten im Hintergrund

Unabhängig von der Page Visibility API haben Benutzeragenten in der Regel eine Reihe von Richtlinien implementiert, um die Leistungsauswirkungen von Hintergrund- oder ausgeblendeten Tabs zu mildern. Diese können Folgendes umfassen:

- Die meisten Browser stoppen das Senden von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks an Hintergrund-Tabs oder verdeckte {{HTMLElement("iframe")}}, um die Leistung und die Batterielebensdauer zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Siehe [Gründe für längere als angegebene Verzögerungen](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für weitere Details.
- Browser implementieren eine budgetbasierte Drosselung von Hintergrund-Timeouts. Dies funktioniert in modernen Browsern auf ähnliche Weise, mit den folgenden Details:

  - In Firefox hat jedes Fenster in Hintergrund-Tabs ein eigenes Zeitbudget in Millisekunden – ein Maximum und ein Minimum von jeweils +50 ms und -150 ms. Chrome ist sehr ähnlich, außer dass das Budget in Sekunden angegeben wird.
  - Fenster unterliegen der Drosselung nach 30 Sekunden, mit den gleichen Regeln für Drosselungsverzögerungen, wie für Fenster-Timer angegeben (siehe wiederum [Gründe für längere als angegebene Verzögerungen](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timer-Aufgaben sind nur erlaubt, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers fertig ausgeführt wird, wird die Zeitdauer, die er zur Ausführung benötigt hat, vom Timeout-Budget seines Fensters abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselungsverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungsbelastung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, werden als Vordergrund betrachtet und nicht gedrosselt.
- Tabs, die Code ausführen, der Echtzeit-Netzwerkverbindungen nutzt ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)), werden nicht gedrosselt, um zu verhindern, dass diese Verbindungen durch ein Timeout geschlossen und unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Prozesse werden ebenfalls nicht gedrosselt, um Timeouts zu vermeiden.

## Erweiterungen auf andere Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt den folgenden Eigenschaften zur [`Document`](/de/docs/Web/API/Document)-Schnittstelle hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem Zustand ist, der als für den Benutzer verborgen gilt, und ansonsten `false`.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}

  - : Ein String, der den aktuellen Sichtbarkeitszustand des Dokuments angibt. Mögliche Werte sind:

    - `visible`
      - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet das, dass die Seite der Vordergrund-Tab eines nicht minimierten Fensters ist.
    - `hidden`
      - : Der Inhalt der Seite ist für den Benutzer nicht sichtbar, entweder weil der Tab des Dokuments im Hintergrund ist oder Teil eines minimierten Fensters, oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt den folgenden Ereignissen der [`Document`](/de/docs/Web/API/Document)-Schnittstelle hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder ausgeblendet wurde.

## Beispiele

### Audio beim Ausblenden der Seite anhalten

Dieses Beispiel hält die Wiedergabe von Audio an, wenn die Seite ausgeblendet wird, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird.
Die Steuerelemente des `<audio>`-Elements erlauben es dem Benutzer, zwischen Wiedergabe und Pause umzuschalten.
Die boolesche Variable `playingOnHide` wird verwendet, um zu verhindern, dass Audio abgespielt wird, wenn die Seite in einen `sichtbaren` Zustand wechselt, aber die Medien beim Ausblenden der Seite nicht wiedergegeben wurden.

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

{{EmbedLiveSample("Audio beim Ausblenden der Seite anhalten", "", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [PerformanceEventTiming: Reporting the First Input Delay (FID)](/de/docs/Web/API/PerformanceEventTiming#reporting_the_first_input_delay_fid)
- [Timing element visibility with the Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
