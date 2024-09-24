---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die verwendet werden können, um zu erfahren, wann ein Dokument sichtbar oder verborgen wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu überprüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem die Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein {{domxref("document.visibilitychange_event", "visibilitychange")}}-Ereignis, um den Zuhörern mitzuteilen, dass sich der Status der Seite geändert hat. Sie können das Ereignis erkennen und einige Aktionen ausführen oder sich anders verhalten. Zum Beispiel kann eine Web-App, die ein Video abspielt, das Video pausieren, wenn der Benutzer den Tab in den Hintergrund stellt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seinen Platz im Video, der Soundtrack des Videos stört nicht die Audioausgabe im neuen Vordergrund-Tab, und der Benutzer verpasst nichts vom Video in der Zwischenzeit.

Die Sichtbarkeitszustände eines {{HTMLElement("iframe")}} sind die gleichen wie beim übergeordneten Dokument. Das Verbergen eines `<iframe>` mit CSS-Eigenschaften (wie {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus oder ändert den Status des Dokuments im Frame.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Seite hat ein Bildkarussell, das nicht zur nächsten Folie wechseln sollte, es sei denn, der Benutzer betrachtet die Seite.
- Eine Anwendung, die ein Informations-Dashboard anzeigt, möchte den Server nicht nach Updates abfragen, wenn die Seite nicht sichtbar ist.
- Eine Seite möchte Klänge ausschalten, wenn ein Gerät im Standby-Modus ist (Benutzer drückt den Netzschalter, um den Bildschirm auszuschalten).

Entwickler haben historisch gesehen unvollkommene Stellvertreter verwendet, um dies zu erkennen. Zum Beispiel hilft das Überwachen von {{domxref("Window/blur_event", "blur")}}- und {{domxref("Window/focus_event", "focus")}}-Ereignissen auf dem Fenster zu wissen, wann Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite tatsächlich für den Benutzer verborgen ist. Die Page Visibility API behebt dies.

> [!NOTE]
> Obwohl {{domxref("Window.blur_event", "onblur")}} und {{domxref("Window.focus_event", "onfocus")}} Ihnen mitteilen, ob der Benutzer Fenster wechselt, bedeutet dies nicht unbedingt, dass es verborgen ist. Seiten werden nur verborgen, wenn der Benutzer Tabs wechselt oder das Browserfenster mit dem Tab minimiert.

### Richtlinien zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben Benutzeragenten in der Regel eine Reihe von Richtlinien, um die Leistungsbelastung von Hintergrund- oder versteckten Tabs zu mindern. Diese können umfassen:

- Die meisten Browser hören auf, {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}-Rückrufe an Hintergrund-Tabs oder versteckte {{HTMLElement("iframe")}}s zu senden, um die Leistung und Akkulaufzeit zu verbessern.
- Timer wie {{domxref("setTimeout()")}} werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) für weitere Details.
- Browser implementieren eine budgetbasierte Hintergrund-Zeitlimitdrosselung. Diese funktioniert in modernen Browsern ähnlich, mit folgenden Details:

  - In Firefox haben Fenster in Hintergrund-Tabs jeweils ihr eigenes Zeitbudget in Millisekunden — ein Maximum und Minimum von +50 ms bzw. -150 ms. Chrome ist sehr ähnlich, außer dass das Budget in Sekunden angegeben ist.
  - Fenster werden nach 30 Sekunden einer Drosselung unterzogen, mit denselben Verzögerungsregeln wie für Fenster-Timer (siehe erneut [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timer-Aufgaben sind nur zulässig, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers ausgeführt wurde, wird die dafür benötigte Zeit von seinem Fenster-Zeitlimitbudget abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde, sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungsbelastung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, werden als Vordergrund betrachtet und nicht gedrosselt.
- Tabs, die Code ausführen, der Echtzeit-Netzwerkverbindungen nutzt ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)), werden nicht gedrosselt, um zu verhindern, dass diese Verbindungen aufgrund von Zeitüberschreitungen unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Prozesse sind ebenfalls nicht gedrosselt, um Zeitüberschreitungen zu vermeiden.

## Erweiterungen auf andere Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt der {{domxref("Document")}}-Schnittstelle die folgenden Eigenschaften hinzu:

- {{domxref("Document.hidden")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem als verborgen erachteten Zustand ist, und `false` andernfalls.
- {{domxref("Document.visibilityState")}} {{ReadOnlyInline}}

  - : Ein String, der den aktuellen Sichtbarkeitsstatus des Dokuments angibt. Mögliche Werte sind:

    - `visible`
      - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die Seite der Vordergrund-Tab eines nicht minimierten Fensters ist.
    - `hidden`
      - : Der Inhalt der Seite ist für den Benutzer nicht sichtbar, entweder weil der Tab des Dokuments im Hintergrund oder Teil eines minimierten Fensters ist oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt der {{domxref("Document")}}-Schnittstelle die folgenden Ereignisse hinzu:

- {{domxref("Document.visibilitychange_event", "visibilitychange")}}
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder versteckt wurde.

## Beispiele

### Audio pausieren, wenn die Seite versteckt ist

Dieses Beispiel pausiert den abgespielten Audio, wenn die Seite versteckt ist, und setzt das Abspielen fort, wenn die Seite wieder sichtbar wird.
Die `<audio>`-Elementsteuerungen ermöglichen es dem Benutzer, zwischen dem Abspielen und Pausieren des Audios zu wechseln.
Das boolesche `playingOnHide` wird verwendet, um zu verhindern, dass Audio abgespielt wird, falls die Seite in einen `visible`-Zustand wechselt, das Medium jedoch beim Verstecken der Seite nicht abgespielt wurde.

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
    // Seite wurde sichtbar! Wiedergabe fortsetzen, wenn Audio "beim Verstecken gespielt" wurde
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

- {{domxref("Document.visibilityState")}}
- {{domxref("Document.hidden")}}
- [PerformanceEventTiming: Reporting the First Input Delay (FID)](/de/docs/Web/API/PerformanceEventTiming#reporting_the_first_input_delay_fid)
- [Sichtbarkeit von Elementen mit der Intersection Observer API zeitlich erfassen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
