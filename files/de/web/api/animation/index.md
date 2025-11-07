---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{ APIRef("Web Animations") }}

Das **`Animation`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animationsspieler und bietet Wiedergabekontrollen sowie eine Zeitleiste für einen Animationsknoten oder -quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue Instanz eines `Animation`-Objekts.

## Instanz-Eigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, egal ob sie läuft oder pausiert ist. Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist ihr Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft den mit dieser Animation verknüpften [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder setzt ihn. Dies wird normalerweise ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekt sein.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle "finished" Promise für diese Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Ruft die zur Identifizierung der Animation verwendete `String`-ID ab oder setzt diese.
- [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) {{ReadOnlyInline}}
  - : Gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation auf dem Weg zu ihrem abgeschlossenen Zustand angibt.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Zeigt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie das Starten der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergabegeschwindigkeit der Animation ab oder setzt diese.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle "ready" Promise für diese Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder explizit durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) gespeichert wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Ruft die geplante Zeit ab, wann die Wiedergabe einer Animation beginnen soll oder setzt diese.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die mit dieser Animation verknüpfte [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder setzt diese.

## Instanz-Methoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und beendet deren Wiedergabe.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Überträgt den aktuellen Stilstatus einer Animation auf das animierte Element, selbst nachdem diese Animation entfernt wurde. Es wird der aktuelle Stilstatus in Form von Eigenschaften innerhalb eines `style`-Attributs auf das animierte Element übertragen.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Ermöglicht das Blättern zum Ende oder Anfang einer Animation, je nachdem, ob die Animation vorwärts oder rückwärts abgespielt wird.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Speichert eine Animation explizit, sodass sie nicht [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn eine andere Animation sie ersetzt.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation erneut, wenn sie zuvor beendet wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt am Anfang der Animation. Wenn die Animation beendet oder noch nicht abgespielt wurde, läuft sie von Ende zu Anfang.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Legt die Geschwindigkeit einer Animation fest, nachdem zuerst ihre Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation vom aktuellen Zustand in den `"idle"`-Spielzustand übergeht.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Barrierefreiheitsbedenken

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Arten von Bewegungen für Vestibuläre Störungen, Epilepsie und Migräne sowie Skotopische Sensitivität ein Auslöser sein.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (oder einen äquivalenten [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) zu verwenden, um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für keine animierten Erlebnisse ausgedrückt haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verstehen der WCAG, Erläuterungen zur Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
