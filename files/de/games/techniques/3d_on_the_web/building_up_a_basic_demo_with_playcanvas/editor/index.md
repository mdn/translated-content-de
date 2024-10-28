---
title: Aufbau einer einfachen Demo mit dem PlayCanvas-Editor
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GamesSidebar}}

Anstatt alles von Grund auf neu zu programmieren, können Sie auch den Online-**PlayCanvas-Editor** nutzen. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren.

## Erstellen eines Kontos

Der PlayCanvas Editor ist kostenlos – alles, was Sie tun müssen, um zu beginnen, ist [registrieren](https://login.playcanvas.com/signup) Sie Ihr Konto und melden Sie sich an:

![PlayCanvas Editor - Anmeldung](playcanvas-editor-login.png)

Wenn Sie sich zum ersten Mal anmelden, gelangen Sie direkt in den Editor und erhalten ein einfaches Starter-Tutorial, in dem ein 3D-Rollballspiel bearbeitet wird. Sie können dies abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, unser Tutorial fortzusetzen, gehen Sie zu Ihrer Canvas-Startseite – zum Beispiel ist meine `https://playcanvas.com/end3r`. Hier sieht die Seite aus – Sie können Projekte erstellen und verwalten, deren Einstellungen ändern usw.

## Erstellen eines neuen Projekts

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _Neu_ klicken:

![PlayCanvas Editor - Hauptteil](playcanvas-editor-panel.png)

Das resultierende Dialogfeld zeigt einige verschiedene Optionen. Es gibt Starter-Kits, aber wir möchten keine Modelle laden oder ein Plattformspiel starten.

1. Wir möchten klein anfangen, daher verwenden wir das leere Projekt – klicken Sie auf die Option Blank Project und geben Sie einen Namen dafür ein (wir verwenden "MDN Games Demo").
2. Geben Sie eine Beschreibung ein, wenn Sie möchten – dies ist optional.
3. Klicken Sie auf _Erstellen_, um es zu erstellen.

![PlayCanvas Editor - Neues Projekt](playcanvas-editor-newproject.png)

Als nächstes sehen Sie die Seite Ihres Projekts – es gibt noch nicht viel. Durch Klicken auf die Schaltfläche _Editor_ starten wir den Online-PlayCanvas-Editor, in dem wir unsere Szene mit den Formen erstellen. Tun Sie es jetzt.

![PlayCanvas Editor - Projekt](playcanvas-editor-project.png)

## Erstellen der Szene

So sieht die Szene ursprünglich im Editor aus. Auch wenn es sich um ein leeres neues Projekt handelt, müssen wir nicht ganz von vorne anfangen – die Kamera und das Richtungslicht sind bereits vorbereitet, sodass Sie sich darüber keine Gedanken machen müssen.

![PlayCanvas Editor - Szene](playcanvas-editor-scene.png)

Nun zum kreativen Teil. Um ein **Entity** zur Szene hinzuzufügen, müssen Sie auf die große Plus-Schaltfläche in der oberen linken Ecke des Editors klicken, neben dem Hierarchy-Text. Wenn Sie mit der Maus über diese Schaltfläche fahren, wird das Label 'Add Entity' angezeigt – genau das wollen wir tun. Ein **Entity** ist jedes Objekt, das in der Szene verwendet wird – es kann sich um ein Objekt wie eine Box, einen Zylinder oder einen Kegel handeln, es kann aber auch eine Kamera, Licht- oder Tonquelle sein. Nach dem Klicken der Schaltfläche sehen Sie eine Dropdown-Liste mit einer Vielzahl von Entities zur Auswahl. Gehen Sie voran und klicken Sie auf _Box_ – sie wird der Szene hinzugefügt.

![PlayCanvas Editor - Neue Box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt – Breite, Höhe und Tiefe sind jeweils auf 1 gesetzt und sie befindet sich in der Mitte der Szene. Sie können sie verschieben oder neue Werte im rechten Bereich anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Damit die Szene etwas Farbe bekommt, brauchen wir ein neues Material, das auf der neu erstellten Box verwendet wird. Klicken Sie auf die Plus-Schaltfläche im _Assets_-Tab und klicken Sie auf die Option _Material_ in der erscheinenden Dropdown-Liste, um ein neues Material zu erstellen.

![PlayCanvas Editor - Neues Material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Assets-Tab und dessen Entitätsinspektion erscheint auf der rechten Seite des Bildschirms. Bearbeiten Sie nun das Namensfeld, um ihm einen einzigartigen Namen zu geben (wir haben _boxMaterial_ gewählt). Ein einzigartiger Name hilft uns, sich zu merken, wofür dieses Material gedacht ist – wir werden später mehr hinzufügen!

![PlayCanvas Editor - Boxmaterial](playcanvas-editor-boxmaterial.png)

Um seine Farbe zu ändern, verwenden wir die _Diffuse_-Option im Entitätsinspektor. Klicken Sie auf _Diffuse_, und wählen Sie dann das farbige Feld neben dem Farbetikett aus – es öffnet sich ein {{Glossary("color_wheel", "Farbkreis")}}. Von hier aus können Sie Ihre gewünschte Farbe anklicken oder sie im unteren Textfeld als Hex-Wert eingeben. Wir haben eine blaue Farbe mit dem Hex-Wert `0095DD` gewählt – geben Sie diesen Code in das Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben richtig gelesen – Sie müssen den Hex-Wert ohne das Hacken/Nummernzeichen eingeben.

![PlayCanvas Editor - Diffusefarbe](playcanvas-editor-diffusecolor.png)

Nun können wir das farbige Material auf die Form anwenden, indem wir sein Symbol vom unteren Teil des Bildschirms (der kleine Punkt auf der linken Seite des Materialnamens – es kann ein wenig fummelig sein, ihn auszuwählen; bleiben Sie hartnäckig) auf die Box in der Szene ziehen.

![PlayCanvas Editor - Box ziehen](playcanvas-editor-boxdrop.png)

Zu diesem Zeitpunkt haben wir eine blaue Box erstellt. Klicken Sie auf die Box, um ihre Entitätsleiste aufzurufen – Sie sehen Optionen zum Ändern ihrer Position, Rotation und Skalierung. Versuchen Sie, die Rotationswerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Drehen](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Play-Pfeil in der oberen rechten Ecke der Szene, um die Szene zu starten und darzustellen – sie wird in einem separaten Browser-Tab geöffnet.

![PlayCanvas Editor - Starten](playcanvas-editor-launch.png)

Das sieht großartig aus! Fügen wir der Szene mehr Formen hinzu, um sie interessanter zu gestalten.

![PlayCanvas Editor - Boxrendering](playcanvas-editor-boxrender.png)

## Hinzufügen weiterer Formen

Um Platz für mehr Formen zu schaffen, verschieben Sie die Box nach links, um Platz für die nächste Form zu machen. Sie können dies tun, indem Sie ihr einen X-Positionswert von -2 geben.

Das Hinzufügen anderer Formen erfolgt auf sehr ähnliche Weise wie das Hinzufügen der Box. Klicken Sie auf den Root-Ordner im Hierarchiebereich (um sicherzustellen, dass die neue Form im Root erscheint und nicht als Kind der Box) und klicken Sie dann auf den großen _Add Entity_ (Plus)-Button und wählen Sie Zylinder aus der Dropdown-Liste – es wird eine neue Zylinderform zur Szene hinzugefügt.

![PlayCanvas Editor - Zylinder](playcanvas-editor-cylinder.png)

Folgen Sie nun den gleichen Schritten wie zuvor beim Färben des Würfels:

- Erstellen Sie ein neues Material mit dem _Add Asset_ (Plus)-Button.
- Stellen Sie sicher, dass das New Material im Assets-Bereich ausgewählt ist, um den Entitätsinspektor anzuzeigen.
- Geben Sie dem Material einen neuen Namen, etwa `cylinderMaterial`.
- Klicken Sie auf Diffuse, dann auf den Farbwähler – geben Sie ihm eine orange Farbe (wir haben FF9500 verwendet).
- Ziehen Sie das `cylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm, um diese Farbe anzuwenden.

![PlayCanvas Editor - Zylinder-Material](playcanvas-editor-cylindermaterial.png)

Verwenden Sie die gleiche Herangehensweise, um einen Kegel zur Szene hinzuzufügen, und geben Sie ihm eine graue Farbe (wir haben `#EAEFF2` verwendet). Sie sollten nun drei Formen auf Ihrer Szene haben, ähnlich wie im folgenden Screenshot.

![PlayCanvas Editor - Kegel](playcanvas-editor-cone.png)

## Animieren unserer Szene

Das Animieren von 3D-Modellen könnte als [fortgeschrittener](https://developer.playcanvas.com/en/tutorials/anim-blending/) Bereich angesehen werden, aber alles, was wir tun möchten, ist, ein paar Eigenschaften eines bestimmten Objekts zu steuern – wir können dazu eine Skriptkomponente verwenden. Klicken Sie auf die Plus-Schaltfläche im Assets-Bereich, wählen Sie die Script-Option und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Box-Animation](playcanvas-editor-boxanimation.png)

Wenn Sie darauf doppelklicken, gelangen Sie zu einem Code-Editor. Wie Sie sehen können, enthält die Datei bereits einige Boilerplate-Code:

```js
pc.script.create("boxAnimation", function (app) {
  class BoxAnimation {
    constructor(entity) {
      this.entity = entity;
    }

    // Called once after all resources are loaded and before the first update
    initialize() {}

    // Called every frame, dt is time in seconds since last update
    update(dt) {}
  }

  return BoxAnimation;
});
```

Der interessanteste Teil ist die `update()` Funktion, in die wir jeden Code einfügen können, den wir in jedem Frame wiederholen möchten. Fügen Sie in dieser Funktion die folgende Zeile hinzu, um die Box in jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, dem das Skript zugeordnet wird (die Box); mit der Variablen `dt`, die die seit dem vorherigen Frame verstrichene Zeit enthält, können wir die Box um eine unterschiedliche Menge um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit der Schaltfläche Speichern in der oberen rechten Ecke des Code-Editors und kehren Sie dann zur Haupteditortab zurück. Befolgen Sie hier diese Schritte:
2. Stellen Sie sicher, dass Sie die Box in der Szene ausgewählt haben.
3. Klicken Sie auf _Komponente hinzufügen_, dann auf _Script_ im Entitätsinspektor.
4. Am unteren Rand des Bildschirms sehen Sie die Liste der verfügbaren Skripten – zurzeit gibt es nur `boxAnimation.js` – durch Klicken darauf wird das Animationsskript auf das Boxobjekt angewendet.

![PlayCanvas Editor - Box-Skript](playcanvas-editor-boxscript.png)

### Der Zylinder

Jetzt führen wir die gleichen Schritte für den Zylinder aus. Zuerst:

1. Erstellen Sie ein neues Skript-Asset.
2. Nennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skript-Symbol, um den Code-Editor zu starten.

Diesmal werden wir anstelle der Rotation des Objekts versuchen, es zu skalieren. Dafür benötigen wir einen Timer, um die seit Beginn der Animation vergangene Gesamtzeit zu speichern. Fügen Sie diesen Code zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Und diese zwei Zeilen zur `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die Methode `setLocalScale()` wendet die angegebenen Werte auf die X-, Y- und Z-Achsen des Objekts an. In unserem Fall ändern wir die Skalierung des Zylinders auf der Y-Achse, indem wir ihm als Wert den `Math.sin()` des Timers geben, mit `Math.abs()` angewendet auf das Ergebnis, um die Werte immer über null zu halten (0-1; Sinuswerte liegen normalerweise zwischen -1 und 1). Das gibt uns einen schönen Skalierungseffekt als Ergebnis.

Denken Sie daran, die `cylinderAnimation.js`-Datei auf das Zylinderobjekt zu übertragen, um die gegebenen Animationen anzuwenden.

### Der Kegel

Zeit, mit dem letzten Objekt zu spielen – dem Kegel. Erstellen Sie eine `coneAnimation.js`-Datei und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie als Nächstes die folgende Zeile zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Um den Kegel auf und ab zu bewegen, verwenden wir die `setPosition()`-Methode – fügen Sie den folgenden Code der `update()`-Funktion hinzu:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird in jedem Frame animiert, indem zu jedem Zeitpunkt der `Math.sin()`-Wert des `timers` übergeben wird – wir haben den `this.timer`-Wert verdoppelt, um ihn höher zu bewegen.

Fügen Sie das `coneAnimation.js`-Skript wie zuvor zum Kegelobjekt hinzu.

## Testen Sie die Demo

Starten Sie die Demo, um die Effekte zu sehen – alle Formen sollten animiert sein. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Formen](playcanvas-editor-shapes.png)

## Zusammenfassung

Jetzt können Sie den [PlayCanvas-Motor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine)-Artikel überprüfen, wenn Sie ihn noch nicht gesehen haben, zurück zur Seite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) gehen oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) gehen.
