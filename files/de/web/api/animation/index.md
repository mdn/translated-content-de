---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{ APIRef("Web Animations") }}

Das **`Animation`** Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animation Player und bietet Wiedergabesteuerungen sowie eine Zeitleiste für einen Animation Node oder eine Quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erzeugt eine neue Instanz des `Animation`-Objekts.

## Instanzeigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, unabhängig davon, ob sie läuft oder pausiert ist. Fehlt der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline), ist sie inaktiv oder wurde noch nicht abgespielt, ist der Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft den mit dieser Animation verbundenen [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder legt ihn fest. Dies wird normalerweise ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekt sein.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle Finished-Promise für diese Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Ruft die `String`-ID ab, die zur Identifizierung der Animation verwendet wird, oder legt sie fest.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie das Starten der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen Aufzählungswert zurück, der den Wiedergabestatus einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergabegeschwindigkeit der Animation ab oder legt sie fest.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle Ready-Promise für diese Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation aktiv ist, automatisch nach dem Ersetzen durch eine andere Animation entfernt wurde oder explizit durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) beibehalten wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Ruft die geplante Zeit ab, zu der die Wiedergabe einer Animation beginnen soll, oder legt sie fest.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die mit dieser Animation assoziierte [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder legt sie fest.

## Instanzmethoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und bricht deren Wiedergabe ab.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Styling-Status einer Animation auf das animierte Element, auch nachdem diese Animation entfernt wurde. Es bewirkt, dass der aktuelle Styling-Status in Form von Eigenschaften innerhalb eines `style` Attributs auf das animierte Element geschrieben wird.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Springt zum Ende einer Animation, je nachdem, ob die Animation vorwärts oder rückwärts läuft.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Beibehaltung einer Animation, wodurch verhindert wird, dass sie [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn sie durch eine andere Animation ersetzt wird.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation von Neuem, wenn sie zuvor beendet wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt zu Beginn der Animation. Falls die Animation beendet oder nicht abgespielt wurde, spielt sie von Ende zu Anfang.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem zuerst ihre Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation von einem anderen Status in den "idle" Wiedergabestatus wechselt.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation zu Ende gespielt wird.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Barrierefreiheitsbedenken

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie der Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Zudem können bestimmte Bewegungen Auslöser für vestibuläre Störungen, Epilepsie, Migräne und Skotopische Sensibilität sein.

Überlegen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen anzubieten, und verwenden Sie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder den entsprechenden [user agent client hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um Nutzern, die keine animierten Erlebnisse wünschen, eine ergänzende Erfahrung zu bieten.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Erklärung der WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
