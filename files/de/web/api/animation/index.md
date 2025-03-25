---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{ APIRef("Web Animations") }}

Das **`Animation`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animationsplayer und bietet Wiedergabesteuerungen sowie eine Zeitleiste für einen Animationsknoten oder eine Quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue `Animation`-Objektinstanz.

## Instanz-Eigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, unabhängig davon, ob sie läuft oder pausiert ist. Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, ist der Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft die mit dieser Animation verknüpfte [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder setzt sie. Dies wird normalerweise ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekt sein.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle fertiggestellte Promise für diese Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Ruft die `String` ab oder setzt sie, die zur Identifizierung der Animation verwendet wird.
- [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation hin zu ihrem abgeschlossenen Zustand angibt.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie z.B. das Initiieren der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabezustand einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergaberate der Animation ab oder setzt sie.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle bereitgestellte Promise für diese Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Zeigt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder explizit durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) beibehalten wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Ruft die geplante Zeit ab oder setzt sie, zu der die Wiedergabe einer Animation beginnen soll.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die mit dieser Animation verknüpfte [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder setzt sie.

## Instanz-Methoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und bricht ihre Wiedergabe ab.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Stilzustand einer Animation auf das animierte Element, selbst nachdem diese Animation entfernt wurde. Es wird den aktuellen Stilzustand auf das animierte Element in Form von Eigenschaften innerhalb eines `style`-Attributs anwenden.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Springt zu einem Ende einer Animation, abhängig davon, ob die Animation abgespielt oder umgekehrt wird.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Hält die Wiedergabe einer Animation an.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Behält eine Animation ausdrücklich bei, um zu verhindern, dass sie [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn eine andere Animation sie ersetzt.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation erneut, wenn sie zuvor beendet war.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt am Anfang der Animation. Wenn die Animation beendet oder ungezeigt ist, wird sie von Ende zu Anfang abgespielt.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem zuerst ihre Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)-Methode aufgerufen wird oder wenn die Animation aus einem anderen Zustand in den Wiedergabezustand `"idle"` wechselt.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Barrierefreiheitshinweise

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Bewegungsarten ein Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Überlegen Sie, eine Mechanismus zum Pausieren oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder eines entsprechenden [user agent client hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um eine ergänzende Erfahrung für Benutzer zu schaffen, die keine animierten Erlebnisse bevorzugen.

- [Designing Safer Web Animation For Motion Sensitivity · Ein A List Apart Artikel](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsives Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verstehen des Erfolgskriteriums 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
