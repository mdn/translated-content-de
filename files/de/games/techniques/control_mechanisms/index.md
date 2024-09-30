---
title: Implementierung von Steuerungsmechanismen für Spiele
slug: Games/Techniques/Control_mechanisms
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

Einer der Hauptvorteile von HTML5 als Plattform für die Spieleentwicklung ist die Fähigkeit, auf verschiedenen Plattformen und Geräten zu laufen. Das Überbrücken von Unterschieden zwischen verschiedenen Geräten stellt mehrere Herausforderungen dar, insbesondere bei der Bereitstellung geeigneter Steuerungen für unterschiedliche Kontexte. In dieser Artikelserie zeigen wir Ihnen, wie Sie ein Spiel entwickeln können, das sowohl auf Touchscreen-Smartphones als auch mit Maus und Tastatur sowie weniger verbreiteten Mechanismen wie Gamepads gespielt werden kann.

## Fallstudie

Wir verwenden das [Captain Rogers: Battle at Andromeda Demo](https://rogers2.enclavegames.com/demo/) als Beispiel.

![Captain Rogers: Battle at Andromeda - Cover des Spiels mit Logos von Enclave Games und Blackmoon Design, Roger's Raumschiff und dem Titel des Spiels.](captainrogers2-cover.png)

Captain Rogers wurde mit dem [Phaser](https://phaser.io/) Framework entwickelt, dem derzeit beliebtesten Werkzeug für einfache 2D-Spieleentwicklung in JavaScript, aber es sollte relativ einfach sein, das in diesen Artikeln enthaltene Wissen auch bei der Entwicklung von Spielen in reinem JavaScript oder einem anderen Framework zu nutzen. Wenn Sie auf der Suche nach einer guten Einführung in Phaser sind, dann sehen Sie sich das [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) Tutorial an.

In den folgenden Artikeln werden wir zeigen, wie verschiedene Steuerungsmechanismen für Captain Rogers implementiert werden können, um verschiedene Plattformen zu unterstützen – von Touch auf Mobilgeräten über Tastatur/Maus/Gamepad auf dem Desktop bis hin zu unkonventionelleren Methoden wie TV-Fernbedienungen, Mikrofonsteuerungen oder Bewegungssteuerungen vor dem Laptop oder das Drücken von Bananen.

## Einrichtung der Umgebung

Beginnen wir mit einem kurzen Überblick über die Ordnerstruktur des Spiels, die JavaScript-Dateien und die Zustände im Spiel, damit wir wissen, was wo passiert. Die Ordner des Spiels sehen folgendermaßen aus:

![Captain Rogers: Battle at Andromeda - Ordnerstruktur des Spielprojekts mit JavaScript-Quellen, Bildern und Schriftarten.](captainrogers2-folderstructure.png)

Wie Sie sehen können, gibt es Ordner für Bilder, JavaScript-Dateien, Schriftarten und Soundeffekte. Der `src` Ordner enthält die JavaScript-Dateien, die als separate Zustände aufgeteilt sind — `Boot.js`, `Preloader.js`, `MainMenu.js` und `Game.js` — diese werden in genau dieser Reihenfolge in die Indexdatei geladen. Die erste Datei initialisiert Phaser, die zweite lädt alle Ressourcen vor, die dritte steuert das Hauptmenü, das den Spieler begrüßt, und die vierte steuert das eigentliche Gameplay.

Jeder Zustand hat seine eigenen Standardmethoden: `preload()`, `create()` und `update()`. Die erste wird benötigt, um die erforderlichen Ressourcen vorzuladen, `create()` wird ausgeführt, sobald der Zustand gestartet wurde, und `update()` wird bei jedem Frame ausgeführt.

Zum Beispiel können Sie eine Schaltfläche in der `create()` Funktion definieren:

```js
create() {
  // …
  const buttonEnclave = this.add.button(10, 10, 'logo-enclave', this.clickEnclave, this);
  // …
}
```

Diese wird einmal beim Start des Spiels erstellt und führt die Aktion `this.clickEnclave()` aus, die ihr beim Klicken zugewiesen wurde. Sie können jedoch auch den Wert des Mauszeigers in der `update()` Funktion verwenden, um eine Aktion auszuführen:

```js
update() {
  // …
  if (this.game.input.mousePointer.isDown) {
      // do something
  }
  // …
}
```

Dies wird immer dann ausgeführt, wenn die Maustaste gedrückt wird, und es wird bei jedem Frame des Spiels mit der `isDown` booleschen Variable des Inputs überprüft.

Das sollte Ihnen einen Einblick in die Projektstruktur geben. Wir werden hauptsächlich mit den Dateien `MainMenu.js` und `Game.js` arbeiten und den Code innerhalb der `create()` und `update()` Methoden in späteren Artikeln ausführlich erläutern.

## Pure JavaScript Demo

Es gibt auch ein [kleines Online-Demo](https://end3r.github.io/JavaScript-Game-Controls/) mit vollständigem Quellcode [verfügbar auf GitHub](https://github.com/end3r/JavaScript-Game-Controls/), in dem die grundlegende Unterstützung für die in den Artikeln beschriebenen Steuerungsmechanismen in reinem JavaScript implementiert ist. Es wird in den folgenden Artikeln selbst erklärt, aber Sie können bereits jetzt damit experimentieren und den Code zu Lernzwecken verwenden.

## Die Artikel

JavaScript ist die perfekte Wahl für das mobile Spielen, da HTML wirklich plattformunabhängig ist; alle folgenden Artikel konzentrieren sich auf die bereitgestellten APIs zur Schnittstelle mit verschiedenen Steuerungsmechanismen:

1. [Mobile Touch-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — Der erste Artikel beginnt mit Touch, da der Ansatz "Mobile First" sehr beliebt ist.
2. [Desktop Maus und Tastatur Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — Beim Spielen auf einem Desktop-/Laptop-Computer sind Tastatur- und Maussteuerungen unerlässlich, um ein akzeptables Maß an Zugänglichkeit für das Spiel zu bieten.
3. [Desktop Gamepad-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — Die Gamepad-API ermöglicht es recht nützlich, Gamepads zur Steuerung von Web-Apps auf Desktop-/Laptop-Computern zu verwenden, für das Konsolengefühl.
4. [Unkonventionelle Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Other) — Der letzte Artikel zeigt einige unkonventionelle Steuerungsmechanismen, von experimentellen bis hin zu leicht verrückten, die Sie vielleicht nicht glauben würden, mit denen das Spiel gespielt werden kann.
