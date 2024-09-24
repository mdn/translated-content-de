---
title: Implementierung von Spielsteuerungsmechanismen
slug: Games/Techniques/Control_mechanisms
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

Einer der Hauptvorteile von HTML5 als Spieleentwicklungsplattform ist die Fähigkeit, auf verschiedenen Plattformen und Geräten zu laufen. Die Vereinfachung von geräteübergreifenden Unterschieden stellt mehrere Herausforderungen dar, insbesondere wenn es darum geht, geeignete Steuerungen für verschiedene Kontexte bereitzustellen. In dieser Artikelserie zeigen wir Ihnen, wie Sie den Bau eines Spiels angehen können, das mit Touchscreen-Smartphones, Maus und Tastatur sowie weniger häufigen Mechanismen wie Gamepads gespielt werden kann.

## Fallstudie

Wir werden das [Captain Rogers: Battle at Andromeda Demo](https://rogers2.enclavegames.com/demo/) als Beispiel verwenden.

![Captain Rogers: Battle at Andromeda - Titelbild des Spiels mit Logos von Enclave Games und Blackmoon Design, Rogers Raumschiff und Titel des Spiels.](captainrogers2-cover.png)

Captain Rogers wurde mit dem [Phaser](https://phaser.io/) Framework erstellt, dem derzeit beliebtesten Werkzeug zur einfachen 2D-Spieleentwicklung in JavaScript, aber es sollte ziemlich einfach sein, das in diesen Artikeln enthaltene Wissen auch beim Erstellen von Spielen in reinem JavaScript oder mit einem anderen Framework wiederzuverwenden. Wenn Sie auf der Suche nach einer guten Einführung in Phaser sind, dann schauen Sie sich das [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) Tutorial an.

In den folgenden Artikeln zeigen wir, wie verschiedene Steuerungsmechanismen für Captain Rogers implementiert werden können, um unterschiedliche Plattformen zu unterstützen – von Touch auf mobilen Geräten über Tastatur/Maus/Gamepad auf dem Desktop bis hin zu unkonventionelleren wie TV-Fernbedienung, Rufen oder Winken vor dem Laptop oder dem Drücken von Bananen.

## Einrichtung der Umgebung

Lassen Sie uns mit einem kurzen Überblick über die Ordnerstruktur des Spiels, die JavaScript-Dateien und die In-Game-Staten beginnen, damit wir wissen, was wo passiert. Die Ordnerstruktur des Spiels sieht so aus:

![Captain Rogers: Battle at Andromeda - Ordnerstruktur des Spieleprojekts mit JavaScript-Quellen, Bildern und Schriftarten.](captainrogers2-folderstructure.png)

Wie Sie sehen können, gibt es Ordner für Bilder, JavaScript-Dateien, Schriftarten und Soundeffekte. Der `src`-Ordner enthält JavaScript-Dateien, die als separate Zustände aufgeteilt sind — `Boot.js`, `Preloader.js`, `MainMenu.js` und `Game.js` — diese werden in genau dieser Reihenfolge in die Index-Datei geladen. Die erste initialisiert Phaser, die zweite lädt alle Assets vor, die dritte steuert das Hauptmenü, das den Spieler willkommen heißt, und die vierte steuert das eigentliche Gameplay.

Jeder Zustand hat seine eigenen Standardmethoden: `preload()`, `create()`, und `update()`. Die erste Methode wird benötigt, um erforderliche Assets vorzuladen, `create()` wird ausgeführt, sobald der Zustand gestartet wurde, und `update()` wird in jedem Frame ausgeführt.

Zum Beispiel können Sie eine Schaltfläche in der `create()`-Funktion definieren:

```js
create() {
  // …
  const buttonEnclave = this.add.button(10, 10, 'logo-enclave', this.clickEnclave, this);
  // …
}
```

Sie wird einmal zu Beginn des Spiels erstellt und führt die Aktion `this.clickEnclave()` aus, die ihr zugewiesen ist, wenn sie angeklickt wird. Sie können jedoch auch den Zeigerwert der Maus in der `update()`-Funktion verwenden, um eine Aktion auszuführen:

```js
update() {
  // …
  if (this.game.input.mousePointer.isDown) {
      // do something
  }
  // …
}
```

Dies wird jedes Mal ausgeführt, wenn die Maustaste gedrückt wird, und es wird in jedem Frame des Spiels gegen die `isDown`-boolesche Variable der Eingabe überprüft.

Das sollte Ihnen ein gewisses Verständnis der Projektstruktur geben. Wir werden hauptsächlich mit den `MainMenu.js` und `Game.js` Dateien arbeiten und den Code in den `create()` und `update()` Methoden in späteren Artikeln viel ausführlicher erklären.

## Reines JavaScript-Demo

Es gibt auch ein [kleines Online-Demo](https://end3r.github.io/JavaScript-Game-Controls/) mit vollständigem Quellcode [verfügbar auf GitHub](https://github.com/end3r/JavaScript-Game-Controls/), in dem die grundlegende Unterstützung für die in den Artikeln beschriebenen Steuerungsmechanismen in reinem JavaScript implementiert ist. Es wird in den folgenden Artikeln selbst erklärt, aber Sie können bereits damit spielen und den Code zu Lernzwecken nach Belieben verwenden.

## Die Artikel

JavaScript ist die perfekte Wahl für mobiles Gaming, da HTML wirklich plattformübergreifend ist; alle folgenden Artikel konzentrieren sich auf die bereitgestellten APIs zur Schnittstellenbildung mit verschiedenen Steuerungsmechanismen:

1. [Mobile Touch-Steuerung](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — Der erste Artikel beginnt mit Touch, da der mobile First-Ansatz sehr beliebt ist.
2. [Desktop-Maus und Tastatursteuerung](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — Beim Spielen auf einem Desktop-/Laptop-Computer ist es wichtig, Tastatur- und Maussteuerungen bereitzustellen, um ein akzeptables Maß an Zugänglichkeit für das Spiel zu gewährleisten.
3. [Desktop-Gamepad-Steuerung](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — Die Gamepad-API ermöglicht nützlich die Verwendung von Gamepads zur Steuerung von Web-Apps auf Desktop-/Laptop-Computern, für dieses Konsolen-Feeling.
4. [Unkonventionelle Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Other) — Der letzte Artikel zeigt einige unkonventionelle Steuerungsmechanismen, von experimentellen bis hin zu leicht verrückten, bei denen Sie nicht glauben könnten, dass sie zum Spielen des Spiels verwendet werden könnten.
