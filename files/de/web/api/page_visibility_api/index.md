---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, auf die Sie lauschen können, um zu wissen, wann ein Dokument sichtbar oder versteckt wird, sowie Funktionen, um den aktuellen Sichtbarkeitszustand der Seite zu prüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis, um den Listenern mitzuteilen, dass sich der Zustand der Seite geändert hat. Sie können das Ereignis erkennen und einige Aktionen ausführen oder sich anders verhalten. Wenn Ihre Web-App beispielsweise ein Video abspielt, kann das Video pausiert werden, wenn der Benutzer den Tab in den Hintergrund legt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seine Position im Video, der Soundtrack des Videos stört nicht den Ton im neuen Vordergrund-Tab, und der Benutzer verpasst keinen Teil des Videos in der Zwischenzeit.

Die Sichtbarkeitszustände eines {{HTMLElement("iframe")}} sind die gleichen wie des übergeordneten Dokuments. Das Verstecken eines `<iframe>` mit CSS-Eigenschaften (wie {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus oder ändert den Zustand des Dokuments innerhalb des Frames.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Seite hat ein Bildkarussell, das nicht zur nächsten Folie übergehen sollte, es sei denn, der Benutzer sieht die Seite
- Eine Anwendung, die ein Dashboard von Informationen anzeigt, möchte den Server nicht für Updates abfragen, wenn die Seite nicht sichtbar ist
- Eine Seite möchte Sounds ausschalten, wenn ein Gerät im Standby-Modus ist (Benutzer drückt den Netzschalter, um den Bildschirm auszuschalten)

Entwickler haben historisch gesehen unvollständige Ersatzlösungen verwendet, um dies zu erkennen. Zum Beispiel hilft es, auf [`blur`](/de/docs/Web/API/Window/blur_event) und [`focus`](/de/docs/Web/API/Window/focus_event)-Ereignisse des Fensters zu achten, um zu wissen, wenn Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite dem Benutzer tatsächlich verborgen ist. Die Page Visibility API adressiert dies.

> [!NOTE]
> Während [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen mitteilen, ob der Benutzer die Fenster wechselt, bedeutet das nicht unbedingt, dass es verborgen ist. Seiten werden nur dann verborgen, wenn der Benutzer Tabs wechselt oder das Browserfenster mit dem Tab minimiert.

### Richtlinien zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben Benutzeragenten typischerweise eine Reihe von Richtlinien zur Minderung des Leistungsaufwands von Hintergrund- oder versteckten Tabs. Diese können umfassen:

- Die meisten Browser hören auf, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufe an Hintergrund-Tabs oder versteckte {{ HTMLElement("iframe") }}s zu senden, um die Leistung und die Akkulaufzeit zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Siehe [Reasons for delays longer than specified](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für weitere Details.
- Browser implementieren ein Budget-basiertes Hintergrund-Timeout-Drosseln. Dies funktioniert in ähnlicher Weise in modernen Browsern, wobei die Details wie folgt sind:
  - In Firefox haben Fenster in Hintergrund-Tabs jeweils ihr eigenes Zeitbudget in Millisekunden — ein Maximum und ein Minimum von +50 ms und -150 ms, respektive. Chrome ist sehr ähnlich, außer dass das Budget in Sekunden angegeben wird.
  - Fenster unterliegen der Drosselung nach 30 Sekunden, mit den gleichen Drosselungsregeln für Fenster-Timer (siehe erneut [Reasons for delays longer than specified](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timer-Aufgaben sind nur erlaubt, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers beendet ist, wird die Zeitdauer, die zur Ausführung benötigt wurde, von seinem Fenster-Timeout-Budget abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungsbeeinträchtigung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, gelten als Vordergrund und werden nicht gedrosselt.
- Tabs, die Code ausführen, der Echtzeit-Netzwerkverbindungen verwendet ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)) werden nicht gedrosselt, um zu vermeiden, dass diese Verbindungen zeitlich ablaufen und unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Prozesse werden ebenfalls nicht gedrosselt, um Zeitüberschreitungen zu vermeiden.

## Erweiterungen zu anderen Schnittstellen

### Instanzeigenschaften

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document)-Schnittstelle die folgenden Eigenschaften hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem Zustand ist, der als verborgen für den Benutzer gilt, und `false` andernfalls.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Ein String, der den aktuellen Sichtbarkeitsstatus des Dokuments anzeigt. Mögliche Werte sind:
    - `visible`
      - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die Seite der Vordergrund-Tab eines nicht-minimierten Fensters ist.
    - `hidden`
      - : Der Inhalt der Seite ist für den Benutzer nicht sichtbar, entweder weil der Tab des Dokuments im Hintergrund ist oder Teil eines minimierten Fensters oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document)-Schnittstelle die folgenden Ereignisse hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder versteckt wurde.

## Beispiele

### Audio pausieren bei Seitenverstecken

Dieses Beispiel paust das abspielende Audio, wenn die Seite versteckt wird, und setzt das Abspielen fort, wenn die Seite wieder sichtbar wird. Die `<audio>`-Elementsteuerungen erlauben dem Benutzer, zwischen abspielendem und pausiertem Audio zu wechseln. Der boolesche `playingOnHide` wird verwendet, um zu verhindern, dass Audio abspielt, wenn der Seitenstatus `visible` wird, wenn die Medien beim Verstecken der Seite nicht gespielt wurden.

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
