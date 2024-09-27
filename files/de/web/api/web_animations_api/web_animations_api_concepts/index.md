---
title: Web Animations API-Konzepte
slug: Web/API/Web_Animations_API/Web_Animations_API_Concepts
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API (WAAPI) bietet JavaScript-Entwicklern Zugriff auf die Animations-Engine des Browsers und beschreibt, wie Animationen in allen Browsern implementiert werden sollten. Dieser Artikel führt Sie in die wichtigen Konzepte hinter der WAAPI ein und bietet Ihnen ein theoretisches Verständnis dafür, wie sie funktioniert, damit Sie sie effektiv nutzen können. Um zu erfahren, wie Sie die API anwenden können, schauen Sie sich den Schwesterartikel [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) an.

Die Web Animations API schließt die Lücke zwischen deklarativen CSS-Animationen und -Übergängen und dynamischen JavaScript-Animationen. Das bedeutet, dass wir sie verwenden können, um CSS-ähnliche Animationen zu erstellen und zu manipulieren, die von einem vordefinierten Zustand zu einem anderen übergehen, oder wir können Variablen, Schleifen und Rückrufe nutzen, um interaktive Animationen zu erstellen, die sich an veränderte Eingaben anpassen und darauf reagieren.

## Geschichte

Vor über einem Jahrzehnt brachte die [Synchronised Multimedia Integration Language, oder SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) (ausgesprochen "smile") Animationen zu SVG. Damals war es die einzige Animations-Engine, um die sich Browser kümmern mussten. Während vier von fünf Browsern SMIL unterstützten, animierte es nur SVG-Elemente, konnte nicht aus CSS verwendet werden und war sehr komplex – was oft zu inkonsistenten Implementierungen führte. Zehn Jahre später stellte das Safari-Team die Spezifikationen für [CSS Animations](https://drafts.csswg.org/css-animations/) und [CSS Transitions](https://drafts.csswg.org/css-transitions/) vor.

Das Internet Explorer-Team forderte eine Animations-API, um die Animationsfunktionen in allen Browsern zu konsolidieren und zu normalisieren. Damit begannen die Anstrengungen unter den Entwicklern von Mozilla Firefox und Google Chrome, die eine Animationsspezifikation schaffen wollten, die alles beherrscht: die Web Animations API. Jetzt haben wir die WAAPI, auf deren Basis zukünftige Animationsspezifikationen aufbauen können, wodurch sie konsistent bleiben und gut zusammenarbeiten. Sie bietet zudem einen Referenzpunkt, an den sich alle Browser mit den derzeit verfügbaren Spezifikationen halten können.

![Eine Illustration, die zeigt, wie die Web Animations API über CSS-Übergängen und -Animationen regiert sowie eine dritte Kategorie mit einem Fragezeichen für zukünftige Animationsspezifikationen darstellt.](waapi_diagram_white.png)

## Die beiden Modelle: Timing und Animation

Die Web Animations API läuft auf zwei Modellen, einem, das sich mit der Zeit beschäftigt — Timing — und einem, das visuelle Veränderungen über die Zeit behandelt — Animation. Das Timing-Modell verfolgt, wie weit wir in einer festgelegten Zeitleiste gekommen sind. Das Animationsmodell bestimmt, wie das animierte Objekt zu einem bestimmten Zeitpunkt aussehen soll.

### Timing

Das Timing-Modell ist das Rückgrat der Arbeit mit der WAAPI. Jedes Dokument hat eine Master-Zeitleiste, [`Document.timeline`](/de/docs/Web/API/Document/timeline), die vom Moment des Ladens der Seite bis ins Unendliche reicht — oder bis das Fenster geschlossen wird. Entlang dieser Zeitleiste sind unsere Animationen gemäß ihrer Dauer verteilt. Jede Animation ist an einem Punkt auf der Zeitleiste mit ihrer [`startTime`](/de/docs/Web/API/Animation/startTime) verankert, die den Moment auf der Zeitleiste des Dokuments darstellt, in dem die Animation beginnt.

Die gesamte Wiedergabe der Animation basiert auf dieser Zeitleiste: Das Suchen der Animation verschiebt die Position der Animation entlang der Zeitleiste; das Verlangsamen oder Beschleunigen der Wiedergaberate zieht ihre Verbreitung entlang der Zeitleiste zusammen oder dehnt sie aus; das Wiederholen der Animation ordnet zusätzliche Iterationen entlang der Zeitleiste an. In der Zukunft könnten wir Zeitleisten basierend auf Gesten, Scroll-Positionen oder sogar übergeordnete und untergeordnete Zeitleisten haben. Die Web Animations API eröffnet so viele Möglichkeiten!

### Animation

Das Animationsmodell kann als eine Reihe von Schnappschüssen darüber betrachtet werden, wie die Animation zu einem bestimmten Zeitpunkt aussehen könnte und entlang der Dauer der Animation angeordnet sind.

![Eine Illustration, die zeigt, wie das Animationsmodell als Serie von Schnappschüssen entlang einer Zeitachse visualisiert werden kann. In diesem Fall Bilder der Grinsekatze, die von 0 Sekunden (da) bis 8 Sekunden (nicht mehr ganz da—nur ihr Lächeln ist noch übrig) gehen.](waapi_timing_diagram_white.png)

## Kernkonzepte

Web-Animationen bestehen aus Timeline-Objekten, Animationsobjekten und Animationseffektobjekten, die zusammenarbeiten. Durch das Zusammenstellen dieser unterschiedlichen Objekte können wir eigene Animationen erstellen.

### Zeitleiste

Zeitleistenobjekte bieten die nützliche Eigenschaft [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), die uns zeigt, wie lange die Seite bereits geöffnet ist: Es ist die "aktuelle Zeit" der Zeitleiste des Dokuments, die sich seit dem Öffnen der Seite fortbewegt. Zur Zeit gibt es nur eine Art von Zeitleistenobjekt: das basierend auf der aktiven [`Zeitleiste`](/de/docs/Web/API/Document/timeline) des Dokuments. In Zukunft könnten wir Zeitleistenobjekte sehen, die der Länge der Seite entsprechen, vielleicht eine `ScrollTimeline` oder ganz andere Dinge.

### Animation

[Animationsobjekte](/de/docs/Web/API/Animation) können sich wie DVD-Player vorstellen lassen: Sie werden zur Steuerung der Medienwiedergabe verwendet, aber ohne Medien zur Wiedergabe tun sie nichts. Animationsobjekte akzeptieren Medien in Form von Animationseffekten, insbesondere Keyframe-Effekte (dazu kommen wir gleich). Wie ein DVD-Player können wir die Methoden des Animationsobjekts verwenden, um [abzuspielen](/de/docs/Web/API/Animation/play), [anzuhalten](/de/docs/Web/API/Animation/pause), [zu suchen](/de/docs/Web/API/Animation/currentTime) und die [Wiedergaberichtung der Animation](/de/docs/Web/API/Animation/reverse) sowie [die Geschwindigkeit](/de/docs/Web/API/Animation/playbackRate) zu steuern.

![Eine Illustration, die zeigt, wie eine Animation einen KeyframeEffect abspielt, ähnlich wie ein DVD-Player eine DVD abspielt.](waapi_player_diagram_white.png)

### Animationseffekt

Wenn Animationsobjekte DVD-Player sind, können wir Animationseffekte oder Keyframe-Effekte als DVDs betrachten. Keyframe-Effekte sind ein Bündel von Informationen, das mindestens eine Reihe von Schlüsseln und die Dauer, über die sie animiert werden sollen, beinhaltet. Das Animationsobjekt nimmt diese Informationen und erstellt mit dem Zeitleistenobjekt eine abspielbare Animation, die wir betrachten und referenzieren können.

Derzeit haben wir nur einen verfügbaren Animationseffekt: [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Potenziell könnten wir in Zukunft alle Arten von Animationseffekten haben — z.B. Effekte zum Gruppieren und Sequenzieren, ähnlich wie Funktionen, die wir in Flash hatten. Tatsächlich wurden Gruppeneffekte und Sequenzeffekte bereits in der aktuell in Bearbeitung befindlichen Level-2-Spezifikation der Web Animations API umrissen.

### Zusammensetzen der Animation aus verschiedenen Teilen

Wir können all diese Teile miteinander verbinden, um mit dem [`Animation()`-Konstruktor](/de/docs/Web/API/Animation/Animation) eine funktionierende Animation zu erstellen, oder wir können die Abkürzungsfunktion [`Element.animate()`](/de/docs/Web/API/Element/animate) verwenden. (Erfahren Sie mehr über die Verwendung von `Element.animate()` in [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).)

## Anwendungsfälle

Die API ermöglicht die Erstellung dynamischer Animationen, die im laufenden Betrieb aktualisiert werden können, sowie einfacherer, deklarativer Animationen, wie sie CSS erstellt. Sie kann in automatisierten Tests verwendet werden, um sicherzustellen, dass Ihre UI-Animationen korrekt laufen. Sie öffnet die Rendering-Engine des Browsers für den Bau von Animationsentwicklungstools wie Zeitleisten. Sie ist auch eine leistungsfähige Grundlage zum Erstellen einer benutzerdefinierten oder kommerziellen Animationsbibliothek. (Siehe [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/).) In manchen Fällen könnte sie den Bedarf an einer vollwertigen Bibliothek gänzlich erübrigen, ähnlich wie Vanilla JavaScript ohne jQuery für viele Zwecke verwendet werden kann.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API) — Hauptseite
- [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) — Leitfaden
- Die [vollständige Suite von Alice im Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Ausprobieren, Forken und Teilen
- [web-animations-js](https://github.com/web-animations/web-animations-js) — das Web Animations API Polyfill
