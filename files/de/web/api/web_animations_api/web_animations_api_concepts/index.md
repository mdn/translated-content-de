---
title: Konzepte der Web Animations API
slug: Web/API/Web_Animations_API/Web_Animations_API_Concepts
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API (WAAPI) bietet JavaScript-Entwicklern Zugang zur Animations-Engine des Browsers und beschreibt, wie Animationen in verschiedenen Browsern implementiert werden sollten. Dieser Artikel führt Sie in die wichtigen Konzepte hinter der WAAPI ein und bietet Ihnen ein theoretisches Verständnis davon, wie sie funktioniert, damit Sie sie effektiv nutzen können. Um zu lernen, wie Sie die API anwenden, schauen Sie sich den Schwesterartikel [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) an.

Die Web Animations API schließt die Lücke zwischen deklarativen CSS-Animationen und -Übergängen sowie dynamischen JavaScript-Animationen. Dies bedeutet, dass wir sie nutzen können, um CSS-ähnliche Animationen zu erstellen und zu manipulieren, die von einem vordefinierten Zustand zu einem anderen übergehen, oder dass wir Variablen, Schleifen und Callback-Funktionen nutzen können, um interaktive Animationen zu erschaffen, die sich anpassen und auf sich ändernde Eingaben reagieren.

## Geschichte

Vor über einem Jahrzehnt brachte die [Synchronized Multimedia Integration Language, oder SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) (ausgesprochen „Smile“) Animationen zu SVG. Damals war es die einzige Animations-Engine, um die sich Browser kümmern mussten. Während vier von fünf Browsern SMIL unterstützten, wurden nur SVG-Elemente animiert, und es konnte nicht aus CSS heraus verwendet werden, was oft zu inkonsistenten Implementierungen führte. Zehn Jahre später führte das Safari-Team die Spezifikationen für [CSS-Animationen](https://drafts.csswg.org/css-animations/) und [CSS-Übergänge](https://drafts.csswg.org/css-transitions/) ein.

Das Internet Explorer-Team forderte eine Animations-API, um die Animationsfunktionalität in allen Browsern zu konsolidieren und zu normalisieren, und so begannen die Bemühungen von Entwicklern bei Mozilla Firefox und Google Chrome, die eine alles umfassende Animationsspezifikation schaffen wollten: die Web Animations API. Jetzt haben wir die WAAPI, auf die zukünftige Animationsspezifikationen aufbauen können, sodass sie konsistent bleiben und gut zusammenspielen. Sie bietet auch einen Referenzpunkt, an den sich alle Browser mit den derzeit verfügbaren Spezifikationen halten können.

![Eine Illustration, die zeigt, wie die Web Animations API über CSS-Übergängen und -Animationen regiert sowie eine dritte Kategorie darstellt, die zukünftige Animationsspezifikationen mit einem Fragezeichen repräsentiert.](waapi_diagram_white.png)

## Die zwei Modelle: Timing und Animation

Die Web Animations API läuft auf zwei Modellen, eines, das die Zeit behandelt—Timing—und eines, das visuelle Änderungen über die Zeit behandelt—Animation. Das Timing-Modell verfolgt, wie weit ein bestimmter Zeitstrahl vorangeschritten ist. Das Animationsmodell bestimmt, wie das animierte Objekt zu jedem gegebenen Zeitpunkt aussehen soll.

### Timing

Das Timing-Modell ist das Rückgrat für die Arbeit mit der WAAPI. Jedes Dokument hat eine Master-Zeitleiste, [`Document.timeline`](/de/docs/Web/API/Document/timeline), die vom Moment des Ladens der Seite bis unendlich reicht—oder bis das Fenster geschlossen wird. Entlang dieser Zeitleiste, entsprechend ihrer Dauer, sind unsere Animationen verteilt. Jede Animation ist an einem Punkt in der Zeitleiste durch ihre [`startTime`](/de/docs/Web/API/Animation/startTime) verankert, die den Moment entlang der Dokumentzeitlinie darstellt, an dem die Animation beginnt abzuspielen.

Die gesamte Wiedergabe der Animation stützt sich auf diese Zeitleiste: Das Suchen der Animation bewegt die Position der Animation entlang der Zeitleiste; das Verlangsamen oder Beschleunigen der Wiedergabegeschwindigkeit verdichtet oder erweitert ihre Verteilung entlang der Zeitleiste; das Wiederholen der Animation reiht zusätzliche Iterationen davon entlang der Zeitachse auf. In Zukunft könnten wir Zeitleisten basierend auf Gesten oder Scrollposition oder sogar Eltern- und Kinderzeitleisten haben. Die Web Animations API eröffnet so viele Möglichkeiten!

### Animation

Das Animationsmodell kann als ein Array von Schnappschüssen betrachtet werden, die zeigen, wie die Animation zu jedem gegebenen Zeitpunkt aussehen könnte, entlang der Dauer der Animation aufgereiht.

![Eine Illustration, die zeigt, wie das Animationsmodell als eine Serie von Schnappschüssen visualisiert werden kann, arrangiert entlang einer Zeitleiste. In diesem Fall Bilder der Grinsekatze von 0 (da) bis zu 8 Sekunden (nicht ganz da—nur ihr Lächeln ist übrig geblieben).](waapi_timing_diagram_white.png)

## Kernkonzepte

Web-Animationen bestehen aus Zeitleistenobjekten, Animationsobjekten und Animationseffektobjekten, die zusammenarbeiten. Indem wir diese unterschiedlichen Objekte zusammenführen, können wir eigene Animationen erstellen.

### Zeitleiste

Zeitleistenobjekte bieten die nützliche Eigenschaft [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), die uns zeigt, wie lange die Seite bereits geöffnet ist: es ist die "aktuelle Zeit" der Zeitleiste des Dokuments, die beim Öffnen der Seite startete. Zum Zeitpunkt des Schreibens gibt es nur eine Art von Zeitleistenobjekt: dasjenige, das auf der Zeitleiste des aktiven Dokuments basiert. In Zukunft könnten wir Zeitleistenobjekte sehen, die der Länge der Seite entsprechen, vielleicht eine `ScrollTimeline`, oder völlig andere Dinge.

### Animation

[Animationsobjekte](/de/docs/Web/API/Animation) können als DVD-Player vorgestellt werden: Sie werden zur Steuerung der Medienwiedergabe verwendet, aber ohne Medien zum Abspielen tun sie nichts. Animationsobjekte akzeptieren Medien in Form von Animationseffekten, speziell Schlüsselbild-Effekte (dazu kommen wir gleich). Wie ein DVD-Player können wir die Methoden des Animationsobjekts verwenden, um [abzuspielen](/de/docs/Web/API/Animation/play), [anzuhalten](/de/docs/Web/API/Animation/pause), [zu suchen](/de/docs/Web/API/Animation/currentTime) und [die Abspielrichtung der Animation zu steuern](/de/docs/Web/API/Animation/reverse) sowie [die Geschwindigkeit](/de/docs/Web/API/Animation/playbackRate).

![Eine Abbildung vergleicht, wie eine Animation einen KeyframeEffect abspielt, wie ein DVD-Player eine DVD abspielt.](waapi_player_diagram_white.png)

### Animation Effect

Wenn Animationsobjekte DVD-Player sind, können wir Animationseffekte oder Keyframe-Effekte als DVDs betrachten. Keyframe-Effekte sind ein Bündel von Informationen, die mindestens eine Reihe von Schlüsselbildern und die Dauer, über die sie animiert werden müssen, enthalten. Das Animationsobjekt nimmt diese Informationen und bildet zusammen mit dem Zeitlinienobjekt eine abspielbare Animation, die wir betrachten und referenzieren können.

Derzeit haben wir nur einen Typ von Animationseffekt zur Verfügung: [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Potenziell könnten wir alle Arten von Animationseffekten in der Zukunft haben—z.B. Effekte zum Gruppieren und Sequenzieren, ähnlich wie Funktionen, die wir in Flash hatten. Tatsächlich wurden Gruppeneffekte und Sequenzeffekte bereits im derzeit in Arbeit befindlichen Level-2-Spec der Web Animations API skizziert.

### Die Animation aus unterschiedlichen Teilen zusammenfügen

Wir können all diese Teile zusammenfügen, um eine funktionierende Animation mit dem [`Animation()` Konstruktor](/de/docs/Web/API/Animation/Animation) zu erstellen oder wir können die [`Element.animate()`](/de/docs/Web/API/Element/animate) Kurzfunktion verwenden. (Lesen Sie mehr darüber, wie Sie `Element.animate()` verwenden, in [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).)

## Anwendungen

Die API ermöglicht die Erstellung dynamischer Animationen, die im laufenden Betrieb aktualisiert werden können, sowie einfacherer, deklarativer Animationen wie der von CSS erstellten. Sie kann in automatisierten Tests verwendet werden, um sicherzustellen, dass Ihre UI-Animationen korrekt ausgeführt werden. Sie öffnet die Rendering-Engine des Browsers für den Aufbau von Animationstools wie Zeitleisten. Sie ist auch eine leistungsstarke Basis, auf der eine benutzerdefinierte oder kommerzielle Animationsbibliothek aufgebaut werden kann. (Siehe [Animieren wie es Ihnen egal ist mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/).) In einigen Fällen könnte sie die Notwendigkeit für eine vollständig entwickelte Bibliothek ganz negieren, ähnlich wie Vanilla-JavaScript ohne jQuery für viele Zwecke verwendet werden kann.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API) — Hauptseite
- [Die Web Animations API verwenden](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) — Leitfaden
- Die [vollständige Sammlung von Alice im Wunderland-Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen
- [web-animations-js](https://github.com/web-animations/web-animations-js) — das Web Animations API Polyfill
