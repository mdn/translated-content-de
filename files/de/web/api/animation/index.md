---
title: Animation
slug: Web/API/Animation
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{ APIRef("Web Animations") }}

Das **`Animation`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert einen einzelnen Animations-Player und bietet Wiedergabesteuerungen sowie eine Zeitleiste für einen Animationsknoten oder eine Quelle.

{{InheritanceDiagram}}

## Konstruktor

- [`Animation()`](/de/docs/Web/API/Animation/Animation)
  - : Erstellt eine neue Instanz eines `Animation`-Objekts.

## Instanz-Eigenschaften

- [`Animation.currentTime`](/de/docs/Web/API/Animation/currentTime)
  - : Der aktuelle Zeitwert der Animation in Millisekunden, unabhängig davon, ob sie läuft oder pausiert ist. Falls die Animation keine [`timeline`](/de/docs/Web/API/AnimationTimeline) hat, inaktiv ist oder noch nicht abgespielt wurde, ist ihr Wert `null`.
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
  - : Ruft den mit dieser Animation verbundenen [`AnimationEffect`](/de/docs/Web/API/AnimationEffect) ab oder setzt ihn. Dies ist in der Regel ein [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)-Objekt.
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) {{ReadOnlyInline}}
  - : Gibt das aktuelle abgeschlossene Promise für diese Animation zurück.
- [`Animation.id`](/de/docs/Web/API/Animation/id)
  - : Holt und setzt die `String`, die zur Identifikation der Animation verwendet wird.
- [`Animation.overallProgress`](/de/docs/Web/API/Animation/overallProgress) {{ReadOnlyInline}}
  - : Gibt eine Zahl zwischen `0` und `1` zurück, die den Gesamterfolg der Animation in Richtung ihres Endzustands anzeigt.
- [`Animation.pending`](/de/docs/Web/API/Animation/pending) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation derzeit auf eine asynchrone Operation wartet, wie z.B. das Initiieren der Wiedergabe oder das Pausieren einer laufenden Animation.
- [`Animation.playState`](/de/docs/Web/API/Animation/playState) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Wiedergabestatus einer Animation beschreibt.
- [`Animation.playbackRate`](/de/docs/Web/API/Animation/playbackRate)
  - : Ruft die Wiedergabegeschwindigkeit der Animation ab oder setzt sie.
- [`Animation.ready`](/de/docs/Web/API/Animation/ready) {{ReadOnlyInline}}
  - : Gibt das aktuelle bereit-Promise für diese Animation zurück.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState) {{ReadOnlyInline}}
  - : Gibt an, ob die Animation aktiv ist, automatisch entfernt wurde, nachdem sie durch eine andere Animation ersetzt wurde, oder explizit durch einen Aufruf von [`Animation.persist()`](/de/docs/Web/API/Animation/persist) beibehalten wurde.
- [`Animation.startTime`](/de/docs/Web/API/Animation/startTime)
  - : Holt oder setzt die geplante Zeit, wann die Wiedergabe einer Animation beginnen soll.
- [`Animation.timeline`](/de/docs/Web/API/Animation/timeline)
  - : Ruft die mit dieser Animation verknüpfte [`timeline`](/de/docs/Web/API/AnimationTimeline) ab oder setzt sie.

## Instanz-Methoden

- [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel)
  - : Löscht alle durch diese Animation verursachten [`keyframeEffects`](/de/docs/Web/API/KeyframeEffect) und bricht deren Wiedergabe ab.
- [`Animation.commitStyles()`](/de/docs/Web/API/Animation/commitStyles)
  - : Übernimmt den aktuellen Styling-Zustand einer Animation auf das animierte Element, auch nachdem diese Animation entfernt wurde. Es wird bewirken, dass der aktuelle Styling-Zustand in Form von Eigenschaften innerhalb eines `style`-Attributs auf das animierte Element geschrieben wird.
- [`Animation.finish()`](/de/docs/Web/API/Animation/finish)
  - : Springt zum Ende einer Animation, abhängig davon, ob die Animation abgespielt oder rückwärts abgespielt wird.
- [`Animation.pause()`](/de/docs/Web/API/Animation/pause)
  - : Unterbricht die Wiedergabe einer Animation.
- [`Animation.persist()`](/de/docs/Web/API/Animation/persist)
  - : Beibehält eine Animation explizit und verhindert, dass sie [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn eine andere Animation sie ersetzt.
- [`Animation.play()`](/de/docs/Web/API/Animation/play)
  - : Startet oder setzt die Wiedergabe einer Animation fort oder beginnt die Animation erneut, wenn sie zuvor beendet wurde.
- [`Animation.reverse()`](/de/docs/Web/API/Animation/reverse)
  - : Kehrt die Wiedergaberichtung um und stoppt am Anfang der Animation. Falls die Animation beendet oder nicht abgespielt ist, wird sie vom Ende zum Anfang abgespielt.
- [`Animation.updatePlaybackRate()`](/de/docs/Web/API/Animation/updatePlaybackRate)
  - : Setzt die Geschwindigkeit einer Animation, nachdem zuerst die Wiedergabeposition synchronisiert wurde.

## Ereignisse

- [`cancel`](/de/docs/Web/API/Animation/cancel_event)
  - : Wird ausgelöst, wenn die Methode [`Animation.cancel()`](/de/docs/Web/API/Animation/cancel) aufgerufen wird oder wenn die Animation vom Zustand `"idle"` aus einem anderen Zustand in den Zustand `"idle"` wechselt.
- [`finish`](/de/docs/Web/API/Animation/finish_event)
  - : Wird ausgelöst, wenn die Animation das Abspielen beendet.
- [`remove`](/de/docs/Web/API/Animation/remove_event)
  - : Wird ausgelöst, wenn die Animation vom Browser [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
