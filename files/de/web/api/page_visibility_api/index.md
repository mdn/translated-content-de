---
title: Page Visibility API
slug: Web/API/Page_Visibility_API
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{DefaultAPISidebar("Page Visibility API")}}

Die Page Visibility API bietet Ereignisse, die Sie überwachen können, um zu wissen, wann ein Dokument sichtbar oder unsichtbar wird, sowie Funktionen, um den aktuellen Sichtbarkeitsstatus der Seite zu überprüfen.

Dies ist besonders nützlich, um Ressourcen zu sparen und die Leistung zu verbessern, indem eine Seite unnötige Aufgaben vermeidet, wenn das Dokument nicht sichtbar ist.

## Konzepte und Nutzung

Wenn der Benutzer das Fenster minimiert, zu einem anderen Tab wechselt oder das Dokument vollständig von einem anderen Fenster verdeckt wird, sendet die API ein [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)-Ereignis, um den Zuhörern mitzuteilen, dass sich der Status der Seite geändert hat. Sie können das Ereignis erkennen und einige Aktionen ausführen oder sich anders verhalten. Zum Beispiel, wenn Ihre Webanwendung ein Video abspielt, kann sie das Video pausieren, wenn der Benutzer den Tab in den Hintergrund legt, und die Wiedergabe fortsetzen, wenn der Benutzer zum Tab zurückkehrt. Der Benutzer verliert nicht seine Position im Video, der Soundtrack des Videos stört keine Audiodateien im neuen Vordergrund-Tab, und der Benutzer verpasst keine Teile des Videos währenddessen.

Die Sichtbarkeitsstatus eines {{HTMLElement("iframe")}} sind die gleichen wie das übergeordnete Dokument. Das Verstecken eines `<iframe>` mit CSS-Eigenschaften (wie zum Beispiel {{cssxref("display", "display: none;")}}) löst keine Sichtbarkeitsereignisse aus oder ändert den Status des im Rahmen enthaltenen Dokuments.

### Anwendungsfälle

Betrachten wir einige Anwendungsfälle für die Page Visibility API.

- Eine Website hat ein Bilderkarussell, das nicht zur nächsten Folie wechseln sollte, es sei denn, der Benutzer betrachtet die Seite.
- Eine Anwendung, die ein Informations-Dashboard anzeigt, möchte den Server nicht nach Updates abfragen, wenn die Seite nicht sichtbar ist.
- Eine Website möchte Töne ausschalten, wenn ein Gerät im Standby-Modus ist (der Benutzer drückt die Power-Taste, um den Bildschirm auszuschalten).

Historisch haben Entwickler unvollkommene Stellvertreter verwendet, um dies zu erkennen. Beispielsweise helfen Ihnen das Überwachen von [`blur`](/de/docs/Web/API/Window/blur_event)- und [`focus`](/de/docs/Web/API/Window/focus_event)-Ereignissen auf dem Fenster zu wissen, wann Ihre Seite nicht die aktive Seite ist, aber es sagt Ihnen nicht, dass Ihre Seite für den Benutzer tatsächlich verborgen ist. Die Page Visibility API befasst sich mit diesem Punkt.

> [!NOTE]
> Auch wenn [`onblur`](/de/docs/Web/API/Window/blur_event) und [`onfocus`](/de/docs/Web/API/Window/focus_event) Ihnen sagen, ob der Benutzer Fenster wechselt, bedeutet das nicht unbedingt, dass es verborgen ist. Seiten werden nur dann versteckt, wenn der Benutzer Tabs wechselt oder das Browserfenster, das den Tab enthält, minimiert.

### Richtlinien zur Unterstützung der Leistung von Hintergrundseiten

Unabhängig von der Page Visibility API haben User Agents typischerweise eine Reihe von Richtlinien implementiert, um die Leistungsauswirkungen von Hintergrund- oder versteckten Tabs zu mindern. Diese können umfassen:

- Die meisten Browser hören auf, [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufe an Hintergrund-Tabs oder versteckte {{HTMLElement("iframe")}}s zu senden, um die Leistung und die Akkulaufzeit zu verbessern.
- Timer wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) werden in Hintergrund-/inaktiven Tabs gedrosselt, um die Leistung zu verbessern. Weitere Details finden Sie unter [Gründe für längere als angegebene Verzögerungen](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified).
- Browser implementieren budgetbasierte Hintergrund-Timeout-Drosselung. Dies funktioniert über moderne Browser hinweg ähnlich, mit folgenden Details:

  - In Firefox haben Fenster in Hintergrund-Tabs jeweils ihr eigenes Zeitbudget in Millisekunden — ein max- und ein min-Wert von +50 ms bzw. -150 ms. Chrome ist sehr ähnlich, außer dass das Budget in Sekunden angegeben wird.
  - Fenster werden nach 30 Sekunden einer Drosselung unterzogen, mit den gleichen Drosselungsverzögerungsregeln wie für Fenstertimer festgelegt (siehe nochmals [Gründe für längere als angegebene Verzögerungen](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified)). In Chrome beträgt dieser Wert 10 Sekunden.
  - Timertasks sind nur zulässig, wenn das Budget nicht negativ ist.
  - Sobald der Code eines Timers ausgeführt wurde, wird die Dauer der Ausführung von dem Timeout-Budget seines Fensters abgezogen.
  - Das Budget regeneriert sich mit einer Rate von 10 ms pro Sekunde sowohl in Firefox als auch in Chrome.

Einige Prozesse sind von diesem Drosselungsverhalten ausgenommen. In diesen Fällen können Sie die Page Visibility API verwenden, um die Leistungswirkung der Tabs zu reduzieren, während sie verborgen sind.

- Tabs, die Audio abspielen, werden als Vordergrund betrachtet und werden nicht gedrosselt.
- Tabs, die Code ausführen, der Echtzeit-Netzwerkverbindungen verwendet ([WebSockets](/de/docs/Web/API/WebSockets_API) und [WebRTC](/de/docs/Web/API/WebRTC_API)), werden ungedrosselt gelassen, um zu vermeiden, dass diese Verbindungen zeitlich begrenzt und unerwartet geschlossen werden.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Prozesse werden ebenfalls ungedrosselt belassen, um Zeitlimits zu vermeiden.

## Erweiterungen zu anderen Schnittstellen

### Instanz-Eigenschaften

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document)-Schnittstelle die folgenden Eigenschaften hinzu:

- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Seite in einem für den Benutzer unsichtbaren Zustand ist, und `false` andernfalls.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}

  - : Ein String, der den aktuellen Sichtbarkeitsstatus des Dokuments angibt. Mögliche Werte sind:

    - `visible`
      - : Der Seiteninhalt ist möglicherweise mindestens teilweise sichtbar. In der Praxis bedeutet dies, dass die Seite der Vordergrund-Tab eines nicht minimierten Fensters ist.
    - `hidden`
      - : Der Inhalt der Seite ist für den Benutzer nicht sichtbar, entweder weil der Tab des Dokuments im Hintergrund ist, Teil eines minimierten Fensters ist, oder weil der Bildschirm des Geräts ausgeschaltet ist.

### Ereignisse

Die Page Visibility API fügt der [`Document`](/de/docs/Web/API/Document)-Schnittstelle die folgenden Ereignisse hinzu:

- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Ausgelöst, wenn der Inhalt eines Tabs sichtbar oder verborgen geworden ist.

## Beispiele

### Audio pausieren bei Seitenverbergen

Dieses Beispiel pausiert die Wiedergabe von Audio, wenn die Seite verborgen ist, und setzt die Wiedergabe fort, wenn die Seite wieder sichtbar wird.
Die `<audio>`-Elementsteuerelemente ermöglichen dem Benutzer, zwischen der Wiedergabe und dem Pausieren von Audio umzuschalten.
Der boolesche `playingOnHide` wird verwendet, um zu verhindern, dass Audio abgespielt wird, wenn die Seite in einen `sichtbaren` Status wechselt, das Medium jedoch nicht bei Seitenverbergen abgespielt wurde.

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

{{EmbedLiveSample("Audio pausieren bei Seitenverbergen", "", 50)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState)
- [`Document.hidden`](/de/docs/Web/API/Document/hidden)
- [Sichtbarkeit von Elementen mit der Intersection Observer API abgleichen](/de/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
