---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

---

title: "Page Visibility API"
slug: Web/API/Page_Visibility_API
page-type: web-api-overview
browser-compat: api.Document.visibilityState
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die Sie nutzen können, um zu erkennen, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitszustand der Seite zu überprüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis, um den Zuhörern mitzuteilen, dass sich der Zustand der Seite geändert hat. Sie können das Ereignis erfassen und einige Aktionen ausführen oder sich anders verhalten. Wenn Ihre Web-App zum Beispiel ein Video abspielt, kann es das Video pausieren, wenn der Benutzer den Tab in den Hintergrund setzt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seine Position im Video, der Soundtrack des Videos stört nicht den Ton im neuen Vordergrundtab und der Benutzer verpasst nichts vom Video in der Zwischenzeit.

Sichtbarkeitszustände eines {{HTMLElement("iframe")}} sind die gleichen wie des übergeordneten Dokuments. Das Verbergen eines `<iframe>` mithilfe von CSS-Eig nicht ausgelöst.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Website hat ein Bildkarussell, das nicht zum nächsten Bild wechseln soll, es sei denn, der Benutzer sieht die Seite
- Eine Anwendung, die ein Dashboard mit Informationen anzeigt, möchte den Server nicht für Updates abfragen, wenn die Seite nicht sichtbar ist
- Eine Website möchte die Klänge ausschalten, wenn ein Gerät im Standby-Modus ist (Benutzer drückt den Netzschalter, um den Bildschirm auszuschalten)

Entwickler haben historisch gesehen unvollkommene Proxys verwendet, um dies zu erkennen. Zum Beispiel hilft das Beobachten von [`blur`](/de/docs/Web/API/Window/blur_event)- und [`focus`](/de/docs/Web/API/Window/focus_event)-Ereignissen im Fenster dabei, zu wissen, wann Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite dem Benutzer tatsächlich verborgen ist. Die Page Visibility API behebt dies.

> [!NOTE]
> Obwohl [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen mitteilen, ob der Benutzer die Fenster wechselt, bedeutet das nicht notwendigerweise, dass es verborgen ist. Seiten werden nur dann verborgen, wenn der Benutzer die Tabs wechselt oder das Browser-Fenster mit dem Tab minimiert.

### Richtlinien zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben Benutzeragenten normalerweise eine Reihe von Richtlinien, um die Leistungsauswirkungen von Hintergrund- oder versteckten Tabs zu mindern. Diese können beinhalten:

- Die meisten Browser stoppen das Senden von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufen an Hintergrundtabs oder versteckte {{HTMLElement("iframe")}}, um die Leistung und Batterielebensdauer zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/SetTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Siehe [Reasons for delays longer than specified](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) für weitere Details.
- Browser implementieren eine nach Budget basierte Drosselung von Hintergrundzeitüberschreitungen. Dies funktioniert auf ähnliche Weise in modernen Browsern, wobei die Details wie folgt sind:

  - In Firefox haben Fenster in Hintergrundtabs jeweils ihr eigenes Zeitbudget in Millisekunden — mit einem maximalen und einem minimalen Wert von +50 ms und -150 ms. Chrome ist sehr ähnlich, nur dass das Budget in Sekunden angegeben wird.
  - Fenster werden nach 30 Sekunden einer Drosselung unterzogen, mit denselben Drosselungsverzögerungsregeln wie für Fenstertimer angegeben (siehe erneut [Reasons for delays longer than specified](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timer-Aufgaben sind nur erlaubt, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers abgeschlossen ist, wird die Zeitdauer, die zur Ausführung benötigt wurde, vom Zeitbudget des Fensters abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselungsverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungsbelastung der Tabs zu reduzieren, wenn sie verborgen sind.

- Tabs, die Audio abspielen, werden als Vordergrund betrachtet und nicht gedrosselt.
- Tabs, die Code-Code ausführen, der Echtzeit-Netzwerkverbindungen ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)) verwendet, bleiben ungedrosselt, um zu vermeiden, dass diese Verbindungen auslaufen und unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Prozesse bleiben ebenfalls ungedrosselt, um Zeitüberschreitungen zu vermeiden.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt die folgenden Eigenschaften zur [`Document`](/de/docs/Web/API/Document)-Schnittstelle hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem Zustand ist, der als dem Benutzer verborgen angesehen wird, und `false` andernfalls.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}

  - : Ein String, der den aktuellen Sichtbarkeitszustand des Dokuments angibt. Mögliche Werte sind:

    - `visible`
      - : Der Seiteninhalt ist möglicherweise zumindest teilweise sichtbar. In der Praxis bedeutet das, dass die Seite der Vordergrundtab eines nicht-minimierten Fensters ist.
    - `hidden`
      - : Der Inhalt der Seite ist für den Benutzer nicht sichtbar, entweder weil sich der Tab des Dokuments im Hintergrund befindet oder Teil eines minimierten Fensters ist oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt die folgenden Ereignisse zur [`Document`](/de/docs/Web/API/Document)-Schnittstelle hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar oder verborgen geworden ist.

## Beispiele

### Audio pausieren beim Verbergen der Seite

Dieses Beispiel pausiert die Wiedergabe des Audios, wenn die Seite verborgen wird, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird. Die Steuerelemente des `<audio>`-Elements ermöglichen es dem Benutzer, zwischen Wiedergabe und Pause zu wechseln. Der boolesche Wert `playingOnHide` wird verwendet, um zu verhindern, dass Audio abgespielt wird, wenn die Seite in einen `sichtbaren` Zustand wechselt, das Medium aber beim Verbergen der Seite nicht abgespielt wurde.

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

{{EmbedLiveSample("Audio pausieren beim Verbergen der Seite", "", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [PerformanceEventTiming: Reporting the First Input Delay (FID)](/de/docs/Web/API/PerformanceEventTiming#reporting_the_first_input_delay_fid)
- [Sichtbarkeit von Elementen mit der Intersection Observer API bestimmen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
