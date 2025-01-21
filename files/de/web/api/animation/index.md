---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: 716e13680debe8e713d42bf9b29708c0f24ef03a
---

{{ APIRef("Web Animations") }}

Das **`Animation`** Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animations-Player und bietet Wiedergabesteuerungen sowie eine Zeitleiste für einen Animationsknoten oder eine Quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue `Animation` Objektinstanz.

## Instanzeigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, unabhängig davon, ob sie läuft oder pausiert ist. Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, hat sie den Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft den mit dieser Animation verknüpften [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder setzt ihn. Dies ist in der Regel ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objekt.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle abgeschlossene Promise für diese Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Ruft die `String`-Kennung der Animation ab oder setzt sie.
- [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation in Richtung ihres abgeschlossenen Zustands angibt.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie das Starten der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergabegeschwindigkeit der Animation ab oder setzt sie.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle Bereit-Promise für diese Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder explizit durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) beibehalten wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Ruft die geplante Zeit ab oder setzt sie, wann die Wiedergabe einer Animation beginnen soll.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die mit dieser Animation verknüpfte [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder setzt sie.

## Instanzmethoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und bricht deren Wiedergabe ab.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Stilzustand einer Animation auf das animierte Element, auch nachdem diese Animation entfernt wurde. Es wird dazu führen, dass der aktuelle Stilzustand in Form von Eigenschaften innerhalb eines `style`-Attributs auf das animierte Element angewendet wird.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Springt entweder zum Ende oder zum Anfang einer Animation, abhängig davon, ob die Animation vorwärts oder rückwärts abgespielt wird.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Beibehaltung einer Animation explizit verhindern, dass sie [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn eine andere Animation sie ersetzt.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation erneut, wenn sie zuvor abgeschlossen wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt am Anfang der Animation. Wenn die Animation abgeschlossen oder ungespielt ist, wird sie vom Ende zum Anfang abgespielt.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem zuerst die Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation vom `"idle"` Wiedergabestatus in einen anderen Zustand wechselt.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Zugänglichkeitsprobleme

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für Vestibular-Störungen, Epilepsie und Migräne sowie Skotopische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen und verwenden Sie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder die entsprechende [user agent client hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um ein ergänzendes Erlebnis für Benutzer zu schaffen, die keine animierten Erlebnisse bevorzugen.

- [Gestaltung sicherer Webanimationen für Bewegungsempfindlichkeit · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Reaktionsfähiges Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis der Erfolgskriterien 2.2.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
