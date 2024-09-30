---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{ APIRef("Web Animations") }}

Die **`Animation`** Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animations-Player und bietet Wiedergabesteuerungen sowie eine Zeitleiste für einen Animationsknoten oder eine Quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue Instanz des `Animation` Objekts.

## Instanz-Eigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, egal ob sie läuft oder pausiert ist. Wenn der Animation eine [`timeline`](/de/docs/Web/API/AnimationTimeline) fehlt, sie inaktiv ist oder noch nicht abgespielt wurde, beträgt ihr Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Holt und setzt den mit dieser Animation verbundenen [`AnimationEffect`](/de/docs/Web/API/AnimationEffect). Dies wird normalerweise ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) Objekt sein.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle abgeschlossene `Promise` für diese Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Holt und setzt den `String`, der zur Identifizierung der Animation verwendet wird.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Zeigt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie das Starten der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Holt oder setzt die Abspielgeschwindigkeit der Animation.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle `ready` Promise für diese Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Zeigt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder ob sie durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) explizit beibehalten wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Holt oder setzt die geplante Zeit, zu der die Wiedergabe einer Animation beginnen soll.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Holt oder setzt die mit dieser Animation verbundene [`timeline`](/de/docs/Web/API/AnimationTimeline).

## Instanz-Methoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und beendet ihre Wiedergabe.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Stilzustand einer Animation für das animierte Element, auch nachdem diese Animation entfernt wurde. Es wird den aktuellen Stilzustand auf das animierte Element anwenden, in Form von Eigenschaften innerhalb eines `style` Attributs.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Springt zu einem der Enden einer Animation, abhängig davon, ob die Animation vorwärts oder rückwärts abgespielt wird.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Beibehält eine Animation explizit und verhindert deren [automatische Entfernung](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations), wenn sie durch eine andere Animation ersetzt wird.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation erneut, wenn sie zuvor beendet wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Abspielrichtung um und stoppt am Anfang der Animation. Wenn die Animation beendet oder nicht abgespielt wurde, wird sie von Ende zu Anfang abgespielt.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem zunächst ihre Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation den `"idle"` Wiedergabezustand aus einem anderen Zustand erreicht.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Barrierefreiheit

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Anliegen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Zusätzlich können bestimmte Arten von Bewegungen ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen, sowie die Verwendung der [Media Query für reduzierte Bewegung](/de/docs/Web/CSS/@media/prefers-reduced-motion) (oder des entsprechenden [User-Agent-Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für nicht-animierte Erlebnisse angegeben haben.

- [Sicherere Webanimationen für Bewegungsempfindlichkeit entwerfen · Ein Artikel von An A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Media Query für reduzierte Bewegung | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verstehen der WCAG, Erklärungen zur Richtlinie 2.2](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verstehen der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
