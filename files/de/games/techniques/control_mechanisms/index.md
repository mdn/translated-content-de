---
title: Implementierung von Spielsteuerungsmechanismen
slug: Games/Techniques/Control_mechanisms
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

Ein Hauptvorteil von HTML5 als Spieleentwicklungsplattform ist die Fähigkeit, auf verschiedenen Plattformen und Geräten zu laufen. Die Vereinheitlichung von Unterschieden zwischen Geräten stellt mehrere Herausforderungen dar, vor allem, wenn es darum geht, geeignete Steuerungen für unterschiedliche Kontexte bereitzustellen. In dieser Artikelserie zeigen wir Ihnen, wie Sie ein Spiel entwickeln können, das auf Touchscreen-Smartphones, mit Maus und Tastatur und auch mit weniger üblichen Mechanismen wie Gamepads gespielt werden kann.

## Fallstudie

Wir verwenden das [Captain Rogers: Battle at Andromeda-Demo](https://rogers2.enclavegames.com/demo/) als Beispiel.

![Captain Rogers: Battle at Andromeda – Cover des Spiels mit den Logos von Enclave Games und Blackmoon Design, Rogers Raumschiff und dem Titel des Spiels.](captainrogers2-cover.png)

Captain Rogers wurde mit dem [Phaser](https://phaser.io/)-Framework erstellt, dem beliebtesten Werkzeug für die einfache 2D-Spielentwicklung in JavaScript, aber es sollte relativ einfach sein, das Wissen aus diesen Artikeln beim Erstellen von Spielen in reinem JavaScript oder einem anderen Framework wiederzuverwenden. Wenn Sie nach einer guten Einführung in Phaser suchen, dann schauen Sie sich das [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) Tutorial an.

In den folgenden Artikeln zeigen wir, wie verschiedene Steuerungsmechanismen für Captain Rogers implementiert werden können, um verschiedene Plattformen zu unterstützen – von Touch auf mobilen Geräten, über Tastatur/Maus/Controller auf dem Desktop, bis hin zu unkonventionelleren Steuerungen wie TV-Fernbedienung, Schreien oder Handbewegungen vor dem Laptop oder das Drücken von Bananen.

## Einrichtung der Umgebung

Beginnen wir mit einem schnellen Überblick über die Ordnerstruktur des Spiels, JavaScript-Dateien und In-Game-Zustände, damit wir wissen, was wo passiert. Die Ordner des Spiels sehen folgendermaßen aus:

![Captain Rogers: Battle at Andromeda – Ordnerstruktur des Spieleprojekts mit JavaScript-Quellen, Bildern und Schriftarten.](captainrogers2-folderstructure.png)

Wie Sie sehen können, gibt es Ordner für Bilder, JavaScript-Dateien, Schriftarten und Soundeffekte. Der `src`-Ordner enthält die JavaScript-Dateien, die in separate Zustände unterteilt sind – `Boot.js`, `Preloader.js`, `MainMenu.js` und `Game.js` – diese werden in genau dieser Reihenfolge in die Indexdatei geladen. Der erste initialisiert Phaser, der zweite lädt alle Assets vor, der dritte steuert das Hauptmenü, das den Spieler begrüßt, und der vierte steuert das eigentliche Gameplay.

Jeder Zustand hat seine eigenen Standardmethoden: `preload()`, `create()` und `update()`. Die erste wird benötigt, um die erforderlichen Assets vorzuladen, `create()` wird ausgeführt, sobald der Zustand begonnen hat, und `update()` wird in jedem Frame ausgeführt.

Zum Beispiel können Sie eine Schaltfläche in der `create()`-Funktion definieren:

```js
create() {
  // …
  const buttonEnclave = this.add.button(10, 10, 'logo-enclave', this.clickEnclave, this);
  // …
}
```

Sie wird einmal zu Beginn des Spiels erstellt und führt die `this.clickEnclave()`-Aktion aus, die ihr zugewiesen wurde, wenn sie angeklickt wird, aber Sie können auch den Mauszeigerwert in der `update()`-Funktion verwenden, um eine Aktion durchzuführen:

```js
update() {
  // …
  if (this.game.input.mousePointer.isDown) {
      // do something
  }
  // …
}
```

Dies wird jedes Mal ausgeführt, wenn die Maustaste gedrückt wird, und es wird in jedem Frame des Spiels gegen die `isDown`-boolesche Variable des Eingangs überprüft.

Das sollte Ihnen ein Verständnis der Projektstruktur geben. Wir werden hauptsächlich mit den Dateien `MainMenu.js` und `Game.js` spielen und den Code innerhalb der `create()`- und `update()`-Methoden in späteren Artikeln viel detaillierter erklären.

## Reines JavaScript-Demo

Es gibt auch ein [kleines Online-Demo](https://end3r.github.io/JavaScript-Game-Controls/) mit komplettem Quellcode [verfügbar auf GitHub](https://github.com/end3r/JavaScript-Game-Controls/), in dem die grundlegende Unterstützung für die in den Artikeln beschriebenen Steuerungsmechanismen in reinem JavaScript implementiert ist. Es wird in den unten stehenden Artikeln selbst erklärt, aber Sie können bereits damit spielen und den Code nach Belieben zu Lernzwecken verwenden.

## Die Artikel

JavaScript ist die perfekte Wahl für mobile Spiele, weil HTML wirklich plattformübergreifend ist; alle folgenden Artikel konzentrieren sich auf die APIs, die zur Schnittstelle mit verschiedenen Steuerungsmechanismen bereitgestellt werden:

1. [Mobile Touch-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — Der erste Artikel beginnt mit Touch, da der Mobile-First-Ansatz sehr beliebt ist.
2. [Desktop-Maus- und Tastatursteuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — Bei Spielen auf einem Desktop-/Laptop-Computer ist die Bereitstellung von Tastatur- und Maussteuerungen unerlässlich, um ein akzeptables Maß an Zugänglichkeit für das Spiel zu gewährleisten.
3. [Gamepad-Steuerungen auf dem Desktop](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — Die Gamepad-API ermöglicht es nützlich, Gamepads zur Steuerung von Webanwendungen auf Desktop-/Laptops zu verwenden, für das Konsolengefühl.
4. [Unkonventionelle Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Other) — Der letzte Artikel zeigt einige unkonventionelle Steuerungsmechanismen, von experimentellen bis hin zu leicht verrückten, von denen Sie vielleicht nicht glauben, dass sie zum Spielen des Spiels verwendet werden könnten.
