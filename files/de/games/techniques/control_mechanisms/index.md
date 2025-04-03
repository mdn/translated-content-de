---
title: Implementierung von Spielsteuerungsmechanismen
slug: Games/Techniques/Control_mechanisms
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{GamesSidebar}}

Einer der Hauptvorteile von HTML5 als Plattform für die Spieleentwicklung ist die Möglichkeit, auf verschiedenen Plattformen und Geräten zu laufen. Die Vereinheitlichung von Unterschieden zwischen den Geräten schafft mehrere Herausforderungen, nicht zuletzt bei der Bereitstellung geeigneter Steuerungen für verschiedene Kontexte. In dieser Artikelserie zeigen wir Ihnen, wie Sie den Bau eines Spiels angehen können, das auf Touchscreen-Smartphones, mit Maus und Tastatur sowie mithilfe weniger gängiger Mechanismen wie Gamepads gespielt werden kann.

## Fallstudie

Wir werden das [Captain Rogers: Battle at Andromeda-Demo](https://rogers2.enclavegames.com/demo/) als Beispiel verwenden.

![Captain Rogers: Battle at Andromeda - Cover des Spiels mit Logos von Enclave Games und Blackmoon Design, Rogers Raumschiff und Spieltitel.](captainrogers2-cover.png)

Captain Rogers wurde mit dem [Phaser](https://phaser.io/) Framework erstellt, dem derzeit beliebtesten Werkzeug für die einfache 2D-Spielentwicklung in JavaScript. Es sollte jedoch relativ einfach sein, das in diesen Artikeln enthaltene Wissen beim Bau von Spielen in reinem JavaScript oder einem anderen Framework wiederzuverwenden. Wenn Sie nach einer guten Einführung in Phaser suchen, dann schauen Sie sich das Tutorial [2D Breakout-Game mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) an.

In den folgenden Artikeln zeigen wir, wie man verschiedene Steuerungsmechanismen für Captain Rogers implementiert, um verschiedene Plattformen zu unterstützen — von Touch auf Mobilgeräten, über Tastatur/Maus/Gamepad auf dem Desktop bis hin zu unkonventionelleren wie TV-Fernbedienung, Rufen oder Winken vor dem Laptop oder Drücken von Bananen.

## Einrichtung der Umgebung

Lassen Sie uns mit einem schnellen Überblick über die Ordnerstruktur des Spiels, die JavaScript-Dateien und die In-Game-Zustände beginnen, damit wir wissen, was wo passiert. Die Ordner des Spiels sehen wie folgt aus:

![Captain Rogers: Battle at Andromeda - Ordnerstruktur des Spielprojekts mit JavaScript-Quellen, Bildern und Schriftarten.](captainrogers2-folderstructure.png)

Wie Sie sehen können, gibt es Ordner für Bilder, JavaScript-Dateien, Schriftarten und Soundeffekte. Der `src`-Ordner enthält die JavaScript-Dateien als separate Zustände — `Boot.js`, `Preloader.js`, `MainMenu.js` und `Game.js` — diese werden in genau dieser Reihenfolge in die Indexdatei geladen. Die erste initialisiert Phaser, die zweite lädt alle Assets vor, die dritte steuert das Hauptmenü, das den Spieler willkommen heißt, und die vierte steuert das eigentliche Gameplay.

Jeder Zustand hat seine eigenen Standardmethoden: `preload()`, `create()` und `update()`. Die erste ist notwendig, um die benötigten Assets vorzuladen, `create()` wird ausgeführt, sobald der Zustand gestartet wurde, und `update()` wird bei jedem Frame ausgeführt.

Zum Beispiel können Sie eine Schaltfläche in der `create()`-Funktion definieren:

```js
function create() {
  // …
  const buttonEnclave = this.add.button(
    10,
    10,
    "logo-enclave",
    this.clickEnclave,
    this,
  );
  // …
}
```

Sie wird einmal zu Beginn des Spiels erstellt und führt die `this.clickEnclave()`-Aktion aus, die ihr zugewiesen wurde, wenn sie angeklickt wird, aber Sie können auch den Zeigerwert der Maus in der `update()`-Funktion verwenden, um eine Aktion auszuführen:

```js
function update() {
  // …
  if (this.game.input.mousePointer.isDown) {
    // do something
  }
  // …
}
```

Dies wird jedes Mal ausgeführt, wenn die Maustaste gedrückt wird, und es wird in jedem Frame des Spiels gegen die `isDown`-boolesche Variable des Eingangs geprüft.

Das sollte Ihnen ein gewisses Verständnis für die Projektstruktur geben. Wir werden hauptsächlich mit den Dateien `MainMenu.js` und `Game.js` arbeiten und den Code innerhalb der `create()`- und `update()`-Methoden in späteren Artikeln viel detaillierter erklären.

## Reines JavaScript-Demo

Es gibt auch ein [kleines Online-Demo](https://end3r.github.io/JavaScript-Game-Controls/) mit vollständigem Quellcode [verfügbar auf GitHub](https://github.com/end3r/JavaScript-Game-Controls/), wo die grundlegende Unterstützung für die in den Artikeln beschriebenen Steuerungsmechanismen in reinem JavaScript implementiert ist. Es wird in den entsprechenden Artikeln unten erklärt, aber Sie können bereits damit spielen und den Code zu Lernzwecken nach Belieben verwenden.

## Die Artikel

JavaScript ist die perfekte Wahl für mobile Spiele, weil HTML wirklich plattformübergreifend ist; alle folgenden Artikel konzentrieren sich auf die bereitgestellten APIs zur Schnittstellenbildung mit verschiedenen Steuerungsmechanismen:

1. [Mobile-Touch-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — Der erste Artikel startet mit Touch, da der Ansatz "Mobile First" sehr populär ist.
2. [Desktop-Steuerungen mit Maus und Tastatur](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — Beim Spielen auf einem Desktop-/Laptop-Computer ist es unerlässlich, Tastatur- und Maussteuerungen anzubieten, um ein akzeptables Maß an Zugänglichkeit für das Spiel zu gewährleisten.
3. [Desktop-Gamepad-Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — Die Gamepad-API ermöglicht es, Gamepads zum Steuern von Web-Apps auf dem Desktop/Laptop zu verwenden, um dieses Konsolen-Gefühl zu erhalten.
4. [Unkonventionelle Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Other) — Der letzte Artikel zeigt einige unkonventionelle Steuerungsmechanismen, von experimentell bis leicht verrückt, bei denen Sie vielleicht nicht glauben, dass sie zum Spielen des Spiels verwendet werden könnten.
