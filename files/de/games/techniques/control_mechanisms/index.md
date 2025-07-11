---
title: Implementierung von Spielsteuerungsmechanismen
slug: Games/Techniques/Control_mechanisms
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Einer der Hauptvorteile von HTML5 als Plattform für die Spieleentwicklung ist die Möglichkeit, auf verschiedenen Plattformen und Geräten auszuführen. Das Vereinheitlichen von Unterschiede zwischen den Geräten bringt zahlreiche Herausforderungen mit sich, insbesondere, wenn es darum geht, passende Steuerungen für verschiedene Kontexte bereitzustellen. In dieser Artikelreihe zeigen wir Ihnen, wie Sie beim Erstellen eines Spiels vorgehen können, das sowohl auf Touchscreen-Smartphones, mit Maus und Tastatur als auch mit weniger verbreiteten Mechanismen wie Gamepads gespielt werden kann.

## Fallstudie

Wir werden das [Captain Rogers: Battle at Andromeda Demo](https://rogers2.enclavegames.com/demo/) als Beispiel verwenden.

![Captain Rogers: Battle at Andromeda - Cover des Spiels mit den Logos Enclave Games und Blackmoon Design, Roger's Raumschiff und Titel des Spiels.](captainrogers2-cover.png)

Captain Rogers wurde mit dem [Phaser](https://phaser.io/) Framework erstellt, dem derzeit beliebtesten Tool für die Entwicklung einfacher 2D-Spiele in JavaScript, aber es sollte ziemlich einfach sein, das in diesen Artikeln enthaltene Wissen beim Erstellen von Spielen in reinem JavaScript oder einem anderen Framework wiederzuverwenden. Wenn Sie nach einer guten Einführung in Phaser suchen, dann sehen Sie sich das Tutorial [2D Breakout Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) an.

In den folgenden Artikeln zeigen wir, wie verschiedene Steuerungsmechanismen für Captain Rogers implementiert werden, um verschiedene Plattformen zu unterstützen — von Touch auf Mobilgeräten über Tastatur/Maus/Gamepad auf dem Desktop bis hin zu ungewöhnlicheren wie der Fernbedienung des Fernsehers, Schreien oder Winken vor dem Laptop oder das Drücken von Bananen.

## Einrichtung der Umgebung

Lassen Sie uns mit einem kurzen Überblick über die Ordnerstruktur des Spiels, die JavaScript-Dateien und die Spielzustände beginnen, damit wir wissen, was wo passiert. Die Ordner des Spiels sehen folgendermaßen aus:

![Captain Rogers: Battle at Andromeda - Ordnerstruktur des Spieleprojekts mit JavaScript-Quellen, Bildern und Schriftarten.](captainrogers2-folderstructure.png)

Wie Sie sehen können, gibt es Ordner für Bilder, JavaScript-Dateien, Schriftarten und Soundeffekte. Der `src` Ordner enthält die JavaScript-Dateien, die als separate Zustände aufgeteilt sind — `Boot.js`, `Preloader.js`, `MainMenu.js` und `Game.js` — diese werden in dieser genauen Reihenfolge in die Indexdatei geladen. Die erste initialisiert Phaser, die zweite lädt alle Assets vor, die dritte steuert das Hauptmenü, das den Spieler willkommen heißt, und die vierte steuert das eigentliche Gameplay.

Jeder Zustand hat seine eigenen Standardmethoden: `preload()`, `create()`, und `update()`. Die erste wird benötigt, um die erforderlichen Assets vorzuladen, `create()` wird einmal ausgeführt, wenn der Zustand gestartet ist, und `update()` wird in jedem Frame ausgeführt.

Zum Beispiel können Sie einen Knopf in der Funktion `create()` definieren:

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

Er wird einmal zu Beginn des Spiels erstellt und führt die `this.clickEnclave()` Aktion aus, die ihm bei einem Klick zugewiesen wird. Sie können jedoch auch den Zeigerwert der Maus in der `update()` Funktion verwenden, um eine Aktion auszuführen:

```js
function update() {
  // …
  if (this.game.input.mousePointer.isDown) {
    // do something
  }
  // …
}
```

Diese wird immer dann ausgeführt, wenn die Maustaste gedrückt wird, und sie wird bei jedem Frame des Spiels gegen die `isDown` boolesche Variable des Eingangs überprüft.

Das sollte Ihnen einen gewissen Einblick in die Projektstruktur geben. Wir werden hauptsächlich mit den `MainMenu.js` und `Game.js` Dateien spielen, und wir werden den Code in den `create()` und `update()` Methoden in späteren Artikeln viel ausführlicher erklären.

## Pure JavaScript-Demo

Es gibt auch eine [kleine Online-Demo](https://end3r.github.io/JavaScript-Game-Controls/) mit dem vollständigen Quellcode [verfügbar auf GitHub](https://github.com/end3r/JavaScript-Game-Controls/), in der die grundlegende Unterstützung für die in den Artikeln beschriebenen Steuerungsmechanismen in reinem JavaScript implementiert ist. Dies wird in den jeweils folgenden Artikeln selbst erläutert, aber Sie können bereits damit spielen und den Code zu Lernzwecken nach Belieben verwenden.

## Die Artikel

JavaScript ist die perfekte Wahl für mobiles Gaming, da HTML wirklich plattformübergreifend ist. Alle folgenden Artikel konzentrieren sich auf die bereitgestellten APIs zur Schnittstelle mit verschiedenen Steuerungsmechanismen:

1. [Mobile Touch-Steuerung](/de/docs/Games/Techniques/Control_mechanisms/Mobile_touch) — Der erste Artikel beginnt mit Touch, da der Ansatz „Mobile First“ sehr beliebt ist.
2. [Desktop-Maus- und Tastatursteuerung](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) — Beim Spielen auf einem Desktop-/Laptop-Computer ist es wichtig, Maus- und Tastatursteuerungen bereitzustellen, um ein annehmbares Maß an Zugänglichkeit für das Spiel zu gewährleisten.
3. [Desktop-Gamepad-Steuerung](/de/docs/Games/Techniques/Control_mechanisms/Desktop_with_gamepad) — Die Gamepad-API ermöglicht es auf nützliche Weise, Gamepads zur Steuerung von Web-Apps auf Desktops/Laptops zu verwenden, um dieses Konsolengefühl zu erzeugen.
4. [Unkonventionelle Steuerungen](/de/docs/Games/Techniques/Control_mechanisms/Other) — Der letzte Artikel zeigt einige unkonventionelle Steuerungsmechanismen, von experimentell bis leicht verrückt, von denen Sie vielleicht nicht glauben, dass sie zum Spielen des Spiels verwendet werden können.
