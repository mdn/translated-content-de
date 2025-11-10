---
title: Konzepte der Web Animations API
slug: Web/API/Web_Animations_API/Web_Animations_API_Concepts
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API (WAAPI) bietet JavaScript-Entwicklern Zugriff auf die Animations-Engine des Browsers und beschreibt, wie Animationen browserübergreifend implementiert werden sollten. Dieser Artikel wird Ihnen die wichtigen Konzepte hinter der WAAPI vorstellen und Ihnen ein theoretisches Verständnis davon vermitteln, wie sie funktioniert, damit Sie sie effektiv einsetzen können. Um zu lernen, wie man die API verwendet, schauen Sie sich den Schwesterartikel [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) an.

Die Web Animations API schließt die Lücke zwischen deklarativen CSS-Animationen und Übergängen sowie dynamischen JavaScript-Animationen. Das bedeutet, dass wir sie verwenden können, um CSS-ähnliche Animationen zu erstellen und zu manipulieren, die von einem vordefinierten Zustand zu einem anderen übergehen, oder wir können Variablen, Schleifen und Rückruffunktionen verwenden, um interaktive Animationen zu erstellen, die sich an verändernde Eingaben anpassen und darauf reagieren.

## Geschichte

Vor über einem Jahrzehnt brachte die [Synchronized Multimedia Integration Language, oder SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) (ausgesprochen "smile") Animation zu SVG. Damals war es die einzige Animations-Engine, um die sich Browser kümmern mussten. Während vier von fünf Browsern SMIL unterstützten, animierte es nur SVG-Elemente, konnte nicht von CSS aus verwendet werden und war sehr komplex — was oft zu inkonsistenten Implementierungen führte. Zehn Jahre später führte das Safari-Team die [CSS Animations](https://drafts.csswg.org/css-animations/) und [CSS Transitions](https://drafts.csswg.org/css-transitions/) Spezifikationen ein.

Das Internet Explorer-Team forderte eine Animations-API, um die Animationsfunktionalität über alle Browser hinweg zu konsolidieren und zu normalisieren. So begannen die Bemühungen unter den Entwicklern von Mozilla Firefox und Google Chrome ernsthaft, die eine Animationsspezifikation erstellten, um sie alle zu beherrschen: die Web Animations API. Jetzt haben wir die WAAPI für zukünftige Animationsspezifikationen, auf denen sie aufbauen können, was erlaubt, dass diese konsistent bleiben und gut zusammenarbeiten. Sie bietet auch einen Referenzpunkt, auf den sich alle Browser mit den derzeit verfügbaren Spezifikationen beziehen können.

![Eine Illustration, die zeigt, wie die Web Animations API über CSS-Übergängen und -Animationen regiert sowie eine dritte Kategorie darstellt, die zukünftige Animationsspezifikationen mit einem Fragezeichen repräsentiert.](waapi_diagram_white.png)

## Die zwei Modelle: Timing und Animation

Die Web Animations API arbeitet auf der Basis von zwei Modellen, eines, das die Zeit behandelt—Timing—und eines, das visuelle Veränderungen über die Zeit behandelt—Animation. Das Timing-Modell verfolgt, wie weit wir auf einer festgelegten Zeitachse gekommen sind. Das Animationsmodell bestimmt, wie das animierte Objekt zu einem bestimmten Zeitpunkt aussehen soll.

### Timing

Das Timing-Modell ist das Rückgrat der Arbeit mit der WAAPI. Jedes Dokument hat eine Master-Timeline, [`Document.timeline`](/de/docs/Web/API/Document/timeline), die sich vom Moment des Ladens der Seite bis ins Unendliche erstreckt — oder bis das Fenster geschlossen wird. Auf dieser Timeline sind unsere Animationen entsprechend ihrer Dauer verteilt. Jede Animation ist an einen Punkt auf der Timeline durch ihre [`startTime`](/de/docs/Web/API/Animation/startTime) verankert, die den Moment auf der Timeline des Dokuments darstellt, an dem die Animation zu spielen beginnt.

Das gesamte Abspielen der Animation basiert auf dieser Timeline: Das Suchen der Animation bewegt die Position der Animation entlang der Timeline; das Verlangsamen oder Beschleunigen der Abspielgeschwindigkeit komprimiert oder erweitert ihre Ausdehnung auf der Timeline; das Wiederholen der Animation reiht zusätzliche Iterationen davon entlang der Timeline auf. In der Zukunft könnten wir Timelines basierend auf Gesten oder Scrollposition oder sogar Eltern- und Kinder-Timelines haben. Die Web Animations API eröffnet so viele Möglichkeiten!

### Animation

Das Animationsmodell kann als eine Reihe von Schnappschüssen dessen gedacht werden, wie die Animation zu jedem gegebenen Zeitpunkt aussehen könnte, entlang der Dauer der Animation aufgereiht.

![Eine Illustration, die zeigt, wie das Animationsmodell als eine Reihe von Schnappschüssen visualisiert werden kann, die entlang einer Timeline angeordnet sind. In diesem Fall Bilder der Grinsekatze, die von 0 (dort) bis 8 Sekunden (nicht ganz dort—nur ihr Lächeln ist übrig) geht.](waapi_timing_diagram_white.png)

## Kernkonzepte

Web-Animationen bestehen aus Timeline-Objekten, Animationsobjekten und Animationseffekt-Objekten, die zusammenarbeiten. Durch das Zusammenfügen dieser unterschiedlichen Objekte können wir unsere eigenen Animationen erstellen.

### Timeline

Timeline-Objekte bieten die nützliche Eigenschaft [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), die uns sehen lässt, wie lange die Seite schon geöffnet ist: es ist die "momentane Zeit" der Timeline des Dokuments, die begann, als die Seite geöffnet wurde. Zum Zeitpunkt des Schreibens gibt es nur eine Art von Timeline-Objekt: dasjenige, das auf der aktiven Dokument-`timeline`(/de/docs/Web/API/Document/timeline) basiert. In der Zukunft könnten wir Timelines sehen, die der Länge der Seite entsprechen, vielleicht eine `ScrollTimeline`, oder völlig andere Dinge.

### Animation

[Animationsobjekte](/de/docs/Web/API/Animation) können sich wie DVD-Player vorgestellt werden: Sie werden zur Steuerung von Medienwiedergaben verwendet, tun aber nichts ohne Medien zum Abspielen. Animationsobjekte akzeptieren Medien in Form von Animationseffekten, speziell Keyframe-Effekten (wir kommen gleich dazu). Wie bei einem DVD-Player können wir die Methoden des Animationsobjekts verwenden, um [abzuspielen](/de/docs/Web/API/Animation/play), [zu pausieren](/de/docs/Web/API/Animation/pause), [zu suchen](/de/docs/Web/API/Animation/currentTime), und [die Abspielrichtung](/de/docs/Web/API/Animation/reverse) und [Geschwindigkeit](/de/docs/Web/API/Animation/playbackRate) der Animation zu steuern.

![Eine Illustration, die vergleicht, wie eine Animation einen KeyframeEffect abspielt, wie ein DVD-Player eine DVD abspielt.](waapi_player_diagram_white.png)

### Animation Effect

Wenn Animationsobjekte DVD-Player sind, können wir Animations-Effekte oder Keyframe-Effekte als DVDs betrachten. Keyframe-Effekte sind ein Bündel von Informationen, das mindestens einen Satz von Schlüsseln und die Dauer, über die sie animiert werden müssen, enthält. Das Animationsobjekt übernimmt diese Informationen und erstellt mithilfe des Timeline-Objekts eine abspielbare Animation, die wir ansehen und referenzieren können.

Derzeit haben wir nur einen Animations-Effekt-Typ verfügbar: [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Potenziell könnten wir in der Zukunft alle möglichen Animationseffekte haben — z.B. Effekte für Gruppieren und Sequenzieren, nicht unähnlich den Funktionen, die wir in Flash hatten. Tatsächlich sind Gruppeneffekte und Sequenzeffekte bereits in der derzeit in Bearbeitung befindlichen Level-2-Spezifikation der Web Animations API umrissen worden.

### Zusammensetzen der Animation aus verschiedenen Teilen

Wir können alle diese Teile zusammenfügen, um eine funktionsfähige Animation mit dem [`Animation()` Constructor](/de/docs/Web/API/Animation/Animation) zu erstellen oder wir können die [`Element.animate()`](/de/docs/Web/API/Element/animate) Abkürzungsfunktion verwenden. (Lesen Sie mehr darüber, wie Sie `Element.animate()` verwenden in [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).)

## Verwendungszwecke

Die API ermöglicht die Erstellung dynamischer Animationen, die im laufenden Betrieb aktualisiert werden können, sowie einfacherer, deklarativer Animationen, wie sie von CSS erstellt werden. Sie kann in automatisierten Tests verwendet werden, um sicherzustellen, dass Ihre UI-Animationen korrekt ablaufen. Sie öffnet die Rendering-Engine des Browsers für den Aufbau von Animationsentwicklungstools wie Timelines. Sie ist auch eine leistungsfähige Basis, um eine benutzerdefinierte oder kommerzielle Animationsbibliothek zu erstellen. (Siehe [Animieren als wäre es egal mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/).) In einigen Fällen kann sie die Notwendigkeit einer vollständig entwickelten Bibliothek ganz aufheben, so wie Vanilla JavaScript ohne jQuery für viele Zwecke verwendet werden kann.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API) — Hauptseite
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) — Leitfaden
- Die [vollständige Sammlung von Alice im Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen, zum Spielen, Forken und Teilen
- [web-animations-js](https://github.com/web-animations/web-animations-js) — der Web Animations API Polyfill
