---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{ APIRef("Web Animations") }}

Das **`Animation`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animations-Player und bietet Wiedergabesteuerungen und eine Zeitleiste für einen Animationsknoten oder eine Quelle.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("Animation.Animation()", "Animation()")}}
  - : Erstellt eine neue Instanz des `Animation`-Objekts.

## Instanz-Eigenschaften

- {{domxref("Animation.currentTime")}}
  - : Der aktuelle Zeitwert der Animation in Millisekunden, unabhängig davon, ob sie läuft oder pausiert ist. Wenn der Animation eine {{domxref("AnimationTimeline", "Zeitleiste")}} fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist ihr Wert `null`.
- {{domxref("Animation.effect")}}
  - : Ruft den {{domxref("AnimationEffect")}} ab oder setzt ihn, der mit dieser Animation verbunden ist. Dies ist in der Regel ein {{domxref("KeyframeEffect")}}-Objekt.
- {{domxref("Animation.finished")}} {{ReadOnlyInline}}
  - : Gibt das aktuelle beendete Promise für diese Animation zurück.
- {{domxref("Animation.id")}}
  - : Holt und setzt den `String`, der zur Identifizierung der Animation verwendet wird.
- {{domxref("Animation.pending")}} {{ReadOnlyInline}}
  - : Gibt an, ob die Animation derzeit auf eine asynchrone Operation wie das Starten der Wiedergabe oder das Pausieren einer laufenden Animation wartet.
- {{domxref("Animation.playState")}} {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.
- {{domxref("Animation.playbackRate")}}
  - : Holt oder setzt die Wiedergabegeschwindigkeit der Animation.
- {{domxref("Animation.ready")}} {{ReadOnlyInline}}
  - : Gibt das aktuelle bereit-Promise für diese Animation zurück.
- {{domxref("Animation.replaceState")}} {{ReadOnlyInline}}
  - : Gibt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder durch einen Aufruf von {{domxref("Animation.persist()")}} explizit beibehalten wurde.
- {{domxref("Animation.startTime")}}
  - : Holt oder setzt die geplante Zeit, wann die Wiedergabe einer Animation beginnen soll.
- {{domxref("Animation.timeline")}}
  - : Ruft die {{domxref("AnimationTimeline", "Zeitleiste")}} ab oder setzt sie, die mit dieser Animation verbunden ist.

## Instanz-Methoden

- {{domxref("Animation.cancel()")}}
  - : Löscht alle durch diese Animation verursachten {{domxref("KeyframeEffect", "keyframeEffects")}} und bricht die Wiedergabe ab.
- {{domxref("Animation.commitStyles()")}}
  - : Übernimmt den aktuellen Styling-Zustand einer Animation auf das animierte Element, auch nachdem diese Animation entfernt wurde. Es wird dazu führen, dass der aktuelle Styling-Zustand auf das animierte Element in Form von Eigenschaften innerhalb eines `style`-Attributs geschrieben wird.
- {{domxref("Animation.finish()")}}
  - : Springt entweder ans Ende einer Animation, abhängig davon, ob die Animation abgespielt oder rückwärts gespielt wird.
- {{domxref("Animation.pause()")}}
  - : Pausiert die Wiedergabe einer Animation.
- {{domxref("Animation.persist()")}}
  - : Beibehaltung einer Animation explizit verhindern, dass sie [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn eine andere Animation sie ersetzt.
- {{domxref("Animation.play()")}}
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation erneut, wenn sie zuvor beendet wurde.
- {{domxref("Animation.reverse()")}}
  - : Kehrt die Wiedergaberichtung um, indem am Anfang der Animation gestoppt wird. Wenn die Animation beendet oder nicht abgespielt wurde, wird sie von Ende zu Anfang abgespielt.
- {{domxref("Animation.updatePlaybackRate()")}}
  - : Setzt die Geschwindigkeit einer Animation, nachdem zuerst die Wiedergabeposition synchronisiert wurde.

## Ereignisse

- {{domxref("Animation.cancel_event", "cancel")}}
  - : Wird ausgelöst, wenn die Methode {{domxref("Animation.cancel()")}} aufgerufen wird oder wenn die Animation von einem anderen Zustand in den `"idle"`-Wiedergabestatus wechselt.
- {{domxref("Animation.finish_event", "finish")}}
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- {{domxref("animation.remove_event", "remove")}}
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Außerdem können bestimmte Arten von Bewegungen Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie skotoptische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder eines entsprechenden [User-Agent-Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um ein ergänzendes Erlebnis für Nutzer zu schaffen, die eine Präferenz für nicht animierte Erlebnisse angegeben haben.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
