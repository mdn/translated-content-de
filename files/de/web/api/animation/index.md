---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{ APIRef("Web Animations") }}

Das **`Animation`** Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animations-Player und bietet Wiedergabesteuerungen sowie eine Zeitleiste für einen Animationsknoten oder -quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue Instanz eines `Animation`-Objekts.

## Instanz-Eigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, egal ob sie läuft oder pausiert ist. Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist ihr Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft den [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder setzt ihn, der mit dieser Animation verknüpft ist. Dies wird normalerweise ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objekt sein.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle Promise für den Abschluss dieser Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Ruft den `String` ab oder setzt ihn, der zur Identifikation der Animation verwendet wird.
- [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation zu ihrem Endzustand anzeigt.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie z.B. das Starten der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergabegeschwindigkeit der Animation ab oder setzt sie.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle Promise für die Bereitschaft dieser Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation aktiv ist, nach dem Ersetzen durch eine andere Animation automatisch entfernt wurde oder durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) explizit gespeichert wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Ruft die geplante Zeit ab oder setzt sie, wann die Wiedergabe einer Animation beginnen soll.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder setzt sie, die mit dieser Animation verknüpft ist.

## Instanz-Methoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und bricht deren Wiedergabe ab.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Styling-Zustand einer Animation auf das animierte Element, auch nachdem die Animation entfernt wurde. Dies führt dazu, dass der aktuelle Style-Zustand in Form von Eigenschaften innerhalb eines `style`-Attributs auf das animierte Element geschrieben wird.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Sucht das Ende einer Animation, je nachdem, ob die Animation abgespielt oder rückwärts läuft.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Speichert eine Animation explizit, um zu verhindern, dass sie [automatisch entfernt wird](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations), wenn eine andere Animation sie ersetzt.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort bzw. startet sie neu, falls sie zuvor beendet wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt am Anfang der Animation. Wenn die Animation beendet oder nicht abgespielt wurde, spielt sie von Ende zu Anfang.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem ihre Wiedergabeposition zunächst synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder die Animation von einem anderen Zustand in den `idle`-Wiedergabestatus wechselt.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt wird](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations).

## Barrierefreiheit Bedenken

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizitsyndrom (ADHS) sein. Außerdem können bestimmte Arten von Bewegungen Auslöser für vestibuläre Störungen, Epilepsie, Migräne und Skotopische Empfindlichkeit sein.

Es sollte eine Möglichkeit in Betracht gezogen werden, Animationen zu pausieren oder zu deaktivieren, und die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder äquivalenter [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die den Vorzug angegeben haben, keine animierten Erlebnisse zu wünschen.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis WCAG, Richtlinie 2.2 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis Erfolgskriterium 2.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
