---
title: Konzepte der Web Animations API
slug: Web/API/Web_Animations_API/Web_Animations_API_Concepts
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API (WAAPI) bietet JavaScript-Entwicklern Zugriff auf die Animations-Engine des Browsers und beschreibt, wie Animationen in verschiedenen Browsern implementiert werden sollten. Dieser Artikel wird Ihnen die wichtigen Konzepte hinter der WAAPI vorstellen, sodass Sie ein theoretisches Verständnis dafür bekommen, wie sie funktioniert, um sie effektiv nutzen zu können. Um zu erfahren, wie Sie die API in der Praxis einsetzen können, lesen Sie den entsprechenden Artikel [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

Die Web Animations API überbrückt die Lücke zwischen deklarativen CSS-Animationen und -Übergängen sowie dynamischen JavaScript-Animationen. Dies bedeutet, dass wir sie verwenden können, um CSS-ähnliche Animationen zu erstellen und zu manipulieren, die von einem vordefinierten Zustand in einen anderen übergehen, oder wir können Variablen, Schleifen und Rückrufe verwenden, um interaktive Animationen zu erstellen, die auf sich ändernde Eingaben reagieren und sich anpassen.

## Geschichte

Vor über einem Jahrzehnt brachte [Synchronized Multimedia Integration Language, oder SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) (ausgesprochen „smile“), Animationen zu SVG. Damals war es die einzige Animations-Engine, mit der sich Browser beschäftigen mussten. Während vier von fünf Browsern SMIL unterstützten, animierte es nur SVG-Elemente, konnte nicht von CSS aus verwendet werden, und war sehr komplex – was oft zu inkonsistenten Implementierungen führte. Zehn Jahre später führte das Safari-Team die Spezifikationen für [CSS-Animationen](https://drafts.csswg.org/css-animations/) und [CSS-Übergänge](https://drafts.csswg.org/css-transitions/) ein.

Das Internet Explorer-Team stellte die Anfrage nach einer Animations-API, um Animationsfunktionen über alle Browser hinweg zu konsolidieren und zu normieren. So wurden ernsthafte Bemühungen unter den Entwicklern von Mozilla Firefox und Google Chrome unternommen, die eine Animationsspezifikation schaffen sollten: die Web Animations API. Jetzt haben wir die WAAPI für zukünftige Animationsspezifikationen, die darauf aufbauen können, sodass sie konsistent bleiben und gut zusammenarbeiten. Sie bietet auch einen Bezugspunkt, an den sich alle Browser mit den derzeit verfügbaren Spezifikationen halten können.

![Eine Illustration, die zeigt, wie die Web Animations API über CSS-Übergängen und -Animationen sowie einer dritten Kategorie künftiger Animationsspezifikationen mit einem Fragezeichen steht.](waapi_diagram_white.png)

## Die Zwei Modelle: Timing und Animation

Die Web Animations API basiert auf zwei Modellen: einem, das sich mit der Zeit befasst – das Timing-Modell – und einem, das sich mit visuellen Änderungen im Laufe der Zeit befasst – das Animationsmodell. Das Timing-Modell verfolgt, wie weit wir auf einer festgelegten Zeitachse gekommen sind. Das Animationsmodell bestimmt, wie das animierte Objekt zu jedem Zeitpunkt aussehen sollte.

### Timing

Das Timing-Modell ist das Rückgrat bei der Arbeit mit der WAAPI. Jedes Dokument hat eine master timeline, [`Document.timeline`](/de/docs/Web/API/Document/timeline), die sich von dem Moment an erstreckt, in dem die Seite geladen wird, bis ins Unendliche – oder bis das Fenster geschlossen wird. Entlang dieser Zeitachse sind unsere Animationen entsprechend ihrer Dauer verteilt. Jede Animation ist an einem Punkt in der Zeitachse durch ihre [`startTime`](/de/docs/Web/API/Animation/startTime) verankert, die den Moment in der Zeitachse des Dokuments darstellt, in dem die Animation beginnt.

Die Wiedergabe der Animationen basiert auf dieser Zeitachse: Eine Animation zu suchen, bewegt ihre Position auf der Zeitachse; das Verlangsamen oder Beschleunigen der Wiedergabegeschwindigkeit verkürzt oder verlängert ihre Verteilung auf der Zeitachse; das Wiederholen der Animation reiht zusätzliche Iterationen entlang der Zeitachse auf. In Zukunft könnten wir Zeitachsen basierend auf Gesten oder Bildlaufpositionen haben oder sogar übergeordnete und untergeordnete Zeitachsen. Die Web Animations API eröffnet so viele Möglichkeiten!

### Animation

Das Animationsmodell kann als eine Reihe von Schnappschüssen dessen angesehen werden, wie die Animation zu jedem Zeitpunkt aussehen könnte, die entlang der Dauer der Animation aufgereiht sind.

![Eine Illustration, die zeigt, wie das Animationsmodell als eine Reihe von Schnappschüssen entlang einer Zeitachse visualisiert werden kann. In diesem Fall Bilder der Grinsekatze, die von 0 (vorhanden) bis 8 Sekunden (nicht mehr da – nur ihr Lächeln ist noch vorhanden) reicht.](waapi_timing_diagram_white.png)

## Kernkonzepte

Web-Animationen bestehen aus Zeitachsenobjekten, Animationsobjekten und Animationseffektobjekten, die zusammenarbeiten. Durch die Zusammensetzung dieser unterschiedlichen Objekte können wir unsere eigenen Animationen erstellen.

### Zeitachse

Zeitachsenobjekte bieten die nützliche Eigenschaft [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), mit der wir sehen können, wie lange die Seite bereits geöffnet ist: Es ist die "aktueller Zeitpunkt" der Zeitachse des Dokuments, die beim Öffnen der Seite begann. Zum Zeitpunkt dieses Schreibens gibt es nur eine Art von Zeitachsenobjekt: dasjenige, das auf der Zeitachse des aktiven Dokuments basiert [`timeline`](/de/docs/Web/API/Document/timeline). In Zukunft könnten wir Zeitachsenobjekte sehen, die der Länge der Seite entsprechen, vielleicht eine `ScrollTimeline`, oder ganz andere Dinge.

### Animation

[Animationsobjekte](/de/docs/Web/API/Animation) können als DVD-Player vorgestellt werden: Sie werden verwendet, um die Medienwiedergabe zu steuern, aber ohne Medien zum Abspielen tun sie nichts. Animationsobjekte akzeptieren Medien in Form von Animationseffekten, speziell Keyframe-Effekten (dazu kommen wir in einem Moment). Wie ein DVD-Player können wir die Methoden des Animationsobjekts verwenden, um [abzuspielen](/de/docs/Web/API/Animation/play), [anzuhalten](/de/docs/Web/API/Animation/pause), [zu suchen](/de/docs/Web/API/Animation/currentTime) und [die Wiedergaberichtung der Animation zu steuern](/de/docs/Web/API/Animation/reverse) sowie [die Geschwindigkeit](/de/docs/Web/API/Animation/playbackRate).

![Eine Illustration, die zeigt, wie eine Animation einen KeyframeEffekt abspielt, vergleichbar mit einem DVD-Player, der eine DVD abspielt.](waapi_player_diagram_white.png)

### Animationseffekt

Wenn Animationsobjekte DVD-Player sind, können wir Animationseffekte oder Keyframe-Effekte als DVDs betrachten. Keyframe-Effekte sind ein Bündel von Informationen, das mindestens einen Satz von Schlüsseln und die Dauer enthält, über die sie animiert werden müssen. Das Animationsobjekt nimmt diese Informationen und erstellt zusammen mit dem Zeitachsenobjekt eine abspielbare Animation, die wir ansehen und referenzieren können.

Derzeit haben wir nur einen Animations-Effekt-Typ zur Verfügung: [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Möglicherweise können wir in Zukunft alle Arten von Animationseffekten haben – z.B. Effekte zum Gruppieren und Sequenzieren, ähnlich den Funktionen, die wir in Flash hatten. Tatsächlich sind Group Effects und Sequence Effects bereits im derzeit in Arbeit befindlichen Level-2-Spezifikation der Web Animations API skizziert.

### Zusammensetzen der Animation aus verschiedenen Teilen

Wir können all diese Teile zusammenfügen, um mit dem [`Animation()` Konstruktor](/de/docs/Web/API/Animation/Animation) eine funktionierende Animation zu erstellen, oder wir können die [`Element.animate()`](/de/docs/Web/API/Element/animate) Abkürzungsfunktion verwenden. (Lesen Sie mehr darüber, wie Sie `Element.animate()` verwenden, in [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).)

## Anwendungen

Die API ermöglicht die Erstellung dynamischer Animationen, die in Echtzeit aktualisiert werden können, sowie einfacher, deklarativer Animationen, wie sie CSS erstellt. Sie kann in automatisierten Tests verwendet werden, um sicherzustellen, dass Ihre Benutzeroberflächenanimationen korrekt funktionieren. Sie öffnet die Render-Engine des Browsers für den Aufbau von Animationsentwicklungstools wie Zeitachsen. Sie ist auch eine leistungsstarke Grundlage für den Aufbau einer benutzerdefinierten oder kommerziellen Animationsbibliothek. (Siehe [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/).) In einigen Fällen kann sie den Bedarf an einer vollständig entwickelten Bibliothek vollständig überflüssig machen, ähnlich wie Vanilla JavaScript in vielen Fällen ohne jQuery verwendet werden kann.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API) — Hauptseite
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) — Leitfaden
- Die [vollständige Sammlung von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen
- [web-animations-js](https://github.com/web-animations/web-animations-js) — das Web Animations API Polyfill
