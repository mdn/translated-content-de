---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: 0ee2e4af1d885177820a8fc27131caa5d800a0bd
---

{{ APIRef("Web Animations") }}

Das **`Animation`** Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animationsplayer und bietet Wiedergabesteuerungen sowie eine Zeitleiste für ein Animationsknoten oder eine -quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue Instanz eines `Animation`-Objekts.

## Instanz-Eigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, unabhängig davon, ob sie läuft oder pausiert ist. Wenn die Animation keine [`timeline`](/de/docs/Web/API/AnimationTimeline) hat, inaktiv ist oder noch nicht abgespielt wurde, ist ihr Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft den [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder legt ihn fest, der mit dieser Animation verbunden ist. Dies ist normalerweise ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekt.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle Promise zurück, das für das Beenden dieser Animation steht.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Ruft die `String`-Kennung der Animation ab oder setzt sie fest.
- [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) {{ReadOnlyInline}}
  - : Gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamtfortschritt der Animation in Richtung ihres Endzustands angibt.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Zeigt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie z.B. das Starten der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabezustand einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergabegeschwindigkeit der Animation ab oder setzt sie.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle Promise zurück, das für die Bereitschaft dieser Animation steht.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Zeigt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder explizit durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) dauerhaft gemacht wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Ruft die geplante Startzeit ab oder setzt sie, zu der die Wiedergabe einer Animation beginnen soll.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder setzt sie, die mit dieser Animation verbunden ist.

## Instanz-Methoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und bricht ihre Wiedergabe ab.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Styling-Zustand einer Animation auf das animierte Element, auch nachdem diese Animation entfernt wurde. Es bewirkt, dass der aktuelle Styling-Zustand in der Form von Eigenschaften innerhalb eines `style`-Attributs auf das animierte Element geschrieben wird.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Springt ans Ende einer Animation, abhängig davon, ob die Animation läuft oder umgekehrt wird.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Macht eine Animation explizit dauerhaft, sodass sie nicht [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn eine andere Animation sie ersetzt.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt sie erneut, wenn sie zuvor beendet wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt am Anfang der Animation. Wenn die Animation beendet oder ungespielt ist, wird sie von Ende bis Anfang abgespielt.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem zunächst ihre Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation den `"idle"`-Wiedergabezustand von einem anderen Zustand aus erreicht.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation beendet wird.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Barrierefreiheit-Bedenken

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Anliegen wie Aufmerksamkeitsdefizitsyndrom (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie skotopische Empfindlichkeit sein.

Überlegen Sie, ob Sie eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitstellen, sowie die Verwendung des [Reduced Motion Media Queries](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder des entsprechenden [user agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz gegen animierte Erlebnisse ausgedrückt haben.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in das Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
