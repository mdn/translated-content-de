---
title: Web-Animations-API-Konzepte
slug: Web/API/Web_Animations_API/Web_Animations_API_Concepts
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Animations")}}

Die Web Animations API (WAAPI) bietet JavaScript-Entwicklern Zugriff auf die Animation-Engine des Browsers und beschreibt, wie Animationen browserübergreifend implementiert werden sollten. Dieser Artikel führt Sie in die wichtigen Konzepte hinter der WAAPI ein und bietet Ihnen ein theoretisches Verständnis darüber, wie sie funktioniert, damit Sie sie effektiv nutzen können. Um zu erfahren, wie Sie die API anwenden können, lesen Sie den dazugehörigen Artikel [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

Die Web Animations API schließt die Lücke zwischen deklarativen CSS-Animationen und -Übergängen und dynamischen JavaScript-Animationen. Das bedeutet, dass wir sie verwenden können, um CSS-ähnliche Animationen zu erstellen und zu manipulieren, die von einem vordefinierten Zustand zu einem anderen übergehen, oder wir können Variablen, Schleifen und Rückrufe verwenden, um interaktive Animationen zu erstellen, die sich anpassen und auf wechselnde Eingaben reagieren.

## Geschichte

Vor über einem Jahrzehnt brachte die [Synchronized Multimedia Integration Language, oder SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL) (ausgesprochen "smile") Animation zu SVG. Damals war es die einzige Animations-Engine, um die sich Browser kümmern mussten. Während vier von fünf Browsern SMIL unterstützten, animierte es nur SVG-Elemente, konnte nicht aus CSS verwendet werden und war sehr komplex — was oft zu inkonsistenten Implementierungen führte. Zehn Jahre später stellte das Safari-Team die Spezifikationen für [CSS-Animationen](https://drafts.csswg.org/css-animations/) und [CSS-Übergänge](https://drafts.csswg.org/css-transitions/) vor.

Das Internet Explorer-Team forderte eine Animations-API, um die Animationsfunktionalität in allen Browsern zu konsolidieren und zu normalisieren, und so begannen ernsthafte Bemühungen unter den Entwicklern von Mozilla Firefox und Google Chrome, die eine Animationsspezifikation schaffen wollten, die alles regeln sollte: die Web Animations API. Jetzt haben wir die WAAPI für zukünftige Animationsspezifikationen, um darauf aufzubauen, damit sie konsistent bleiben und gut zusammenarbeiten. Sie bietet auch eine Referenz, an die sich alle Browser mit den derzeit verfügbaren Spezifikationen halten können.

![Eine Illustration, die zeigt, wie die Web Animations API über CSS-Übergänge und -Animationen sowie einer dritten Kategorie zukünftiger Animationsspezifikationen mit einem Fragezeichen herrscht.](waapi_diagram_white.png)

## Die Zwei Modelle: Timing und Animation

Die Web Animations API läuft auf zwei Modellen, einem, das die Zeit behandelt—Timing—und einem, das die visuelle Veränderung über die Zeit behandelt—Animation. Das Timing-Modell verfolgt, wie weit wir auf einer festgelegten Zeitachse gekommen sind. Das Animationsmodell bestimmt, wie das animierte Objekt zu einem bestimmten Zeitpunkt aussehen soll.

### Timing

Das Timing-Modell ist das Rückgrat der Arbeit mit der WAAPI. Jedes Dokument hat eine Master-Zeitachse, [`Document.timeline`](/de/docs/Web/API/Document/timeline), die sich vom Moment des Ladens der Seite bis zur Unendlichkeit erstreckt — oder bis das Fenster geschlossen wird. Entlang dieser Zeitachse sind unsere Animationen entsprechend ihrer Dauer verteilt. Jede Animation ist durch ihre [`startTime`](/de/docs/Web/API/Animation/startTime) an einem Punkt in der Zeitachse verankert, der den Moment entlang der Dokumentzeitachse darstellt, in dem die Animation zu spielen beginnt.

Die gesamte Wiedergabe der Animation beruht auf dieser Zeitachse: Die Animation zu suchen, bewegt die Position der Animation entlang der Zeitachse; das Verlangsamen oder Beschleunigen der Wiedergabegeschwindigkeit kondensiert oder erweitert ihre Verteilung auf der Zeitachse; das Wiederholen der Animation fügt zusätzliche Iterationen entlang der Zeitachse hinzu. In der Zukunft könnten wir Zeitachsen basierend auf Gesten oder Scrollposition oder sogar übergeordnete und untergeordnete Zeitachsen haben. Die Web Animations API eröffnet so viele Möglichkeiten!

### Animation

Das Animationsmodell kann als eine Reihe von Schnappschüssen angesehen werden, wie die Animation zu einem bestimmten Zeitpunkt aussehen könnte, die entlang der Dauer der Animation aufgereiht ist.

![Eine Illustration, die zeigt, wie das Animationsmodell als eine Reihe von Schnappschüssen entlang einer Zeitachse visualisiert werden kann. In diesem Fall Bilder der Cheshire-Katze, die von 0 (da) bis 8 Sekunden (nicht ganz da—nur ihr Lächeln ist übrig) geht.](waapi_timing_diagram_white.png)

## Kernkonzepte

Web-Animationen bestehen aus Timeline-Objekten, Animationsobjekten und Animationseffekt-Objekten, die zusammenarbeiten. Indem wir diese unterschiedlichen Objekte zusammensetzen, können wir unsere eigenen Animationen erstellen.

### Timeline

Timeline-Objekte bieten die nützliche Eigenschaft [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime), die uns zeigt, wie lange die Seite bereits geöffnet ist: Es ist die "aktuelle Zeit" der Dokumenten-Zeitachse, die begann, als die Seite geöffnet wurde. Zum jetzigen Zeitpunkt gibt es nur eine Art von Timeline-Objekt: Das, das auf der aktiven Dokumentenzeitachse basiert [`timeline`](/de/docs/Web/API/Document/timeline). In Zukunft könnten wir Zeitachsenobjekte sehen, die der Länge der Seite entsprechen, vielleicht eine `ScrollTimeline`, oder völlig andere Dinge.

### Animation

[Animationsobjekte](/de/docs/Web/API/Animation) können als DVD-Player vorgestellt werden: Sie werden zur Steuerung der Medienwiedergabe verwendet, aber ohne Medien, die sie abspielen können, tun sie nichts. Animationsobjekte akzeptieren Medien in Form von Animationseffekten, speziell Keyframe-Effekten (dazu kommen wir gleich). Wie ein DVD-Player können wir die Methoden des Animationsobjekts verwenden, um [abzuspielen](/de/docs/Web/API/Animation/play), [anzuhalten](/de/docs/Web/API/Animation/pause), [zu suchen](/de/docs/Web/API/Animation/currentTime), und [die Wiedergaberichtung](/de/docs/Web/API/Animation/reverse) und [Geschwindigkeit der Animation zu steuern](/de/docs/Web/API/Animation/playbackRate).

![Eine Illustration, die vergleicht, wie eine Animation einen KeyframeEffect abspielt, wie ein DVD-Player eine DVD abspielt.](waapi_player_diagram_white.png)

### Animation Effect

Wenn Animationsobjekte DVD-Player sind, können wir Animationseffekte oder Keyframe-Effekte als DVDs betrachten. Keyframe-Effekte sind ein Informationsbündel, das mindestens einen Satz von Schlüsseln und die Dauer, über die sie animiert werden müssen, enthält. Das Animationsobjekt nimmt diese Informationen und montiert mithilfe des Timeline-Objekts eine abspielbare Animation, die wir ansehen und referenzieren können.

Derzeit haben wir nur einen verfügbaren Animationseffekt-Typ: [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect). Potenziell könnten wir in Zukunft alle Arten von Animationseffekten haben—z.B. Effekte für Gruppieren und Sequenzieren, ähnlich wie Funktionen, die wir in Flash hatten. Tatsächlich sind Gruppeneffekte und Sequenzeffekte bereits in der aktuell in Arbeit befindlichen Spezifikation der Level 2 Web Animations API skizziert.

### Zusammensetzen der Animation aus verschiedenen Teilen

Wir können all diese Teile zusammenführen, um eine funktionierende Animation mit dem [`Animation()` Konstruktor](/de/docs/Web/API/Animation/Animation) zu erstellen, oder wir können die Abkürzungsfunktion [`Element.animate()`](/de/docs/Web/API/Element/animate) verwenden. (Lesen Sie mehr darüber, wie Sie `Element.animate()` verwenden in [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).)

## Verwendungen

Die API ermöglicht die Erstellung dynamischer Animationen, die im laufenden Betrieb aktualisiert werden können, sowie einfacherer, deklarativer Animationen wie diejenigen, die CSS erzeugt. Sie kann in automatisierten Tests verwendet werden, um sicherzustellen, dass Ihre UI-Animationen korrekt ausgeführt werden. Sie öffnet die Render-Engine des Browsers für den Bau von Animationsentwicklungstools wie Zeitachsen. Sie ist auch eine leistungsstarke Basis, auf der eine benutzerdefinierte oder kommerzielle Animationsbibliothek aufgebaut werden kann. (Siehe [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/).) In einigen Fällen kann sie die Notwendigkeit einer vollständig ausgereiften Bibliothek vollständig negieren, ähnlich wie Vanilla JavaScript ohne jQuery für viele Zwecke verwendet werden kann.

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API) — Hauptseite
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) — Leitfaden
- Die [vollständige Suite von Alice im Wunderland Demos](https://codepen.io/collection/nqNJvD) auf CodePen zum Spielen, Forken und Teilen
- [web-animations-js](https://github.com/web-animations/web-animations-js) — das Web Animations API Polyfill
