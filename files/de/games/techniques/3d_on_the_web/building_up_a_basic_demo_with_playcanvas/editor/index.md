---
title: Eine einfache Demo mit dem PlayCanvas-Editor erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: d86a376c3e6e4761d747314a015fa6afe121600f
---

Statt alles von Grund auf zu programmieren, können Sie den **PlayCanvas-Editor** im Web verwenden. Wenn Sie nicht gern programmieren, kann das eine angenehmere Arbeitsumgebung sein.

## Ein Konto erstellen

Der PlayCanvas-Editor kann für öffentliche Projekte kostenlos genutzt werden. Um loszulegen, müssen Sie lediglich [ein Konto erstellen](https://login.playcanvas.com/signup) und sich anmelden.

Rufen Sie nach der Anmeldung Ihr Projekt-Dashboard unter `https://playcanvas.com/editor` auf. Dort können Sie Projekte erstellen und verwalten, ihre Einstellungen ändern und vieles mehr. Falls Sie nach der Registrierung direkt zu einem Beispielprojekt gelangen, klicken Sie oben links im Editor auf das PlayCanvas-Logo und wählen Sie _All Projects_, um das Dashboard zu öffnen.

## Ein neues Projekt erstellen

Erstellen Sie ein neues Projekt, indem Sie in der Seitenleiste des Dashboards auf _New project_ klicken.

![PlayCanvas-Editor – Dashboard](playcanvas-editor-panel.png)

Im daraufhin angezeigten Dialogfeld stehen mehrere Optionen zur Auswahl. Es gibt Starter-Kits, aber wir möchten weder Modelle laden noch ein Plattformspiel erstellen.

1. Wir fangen klein an und verwenden deshalb ein leeres Projekt: Klicken Sie auf _Blank Project_ und geben Sie einen Namen ein (wir verwenden „MDN Games demo“).
2. Geben Sie bei Bedarf eine Beschreibung ein. Dieser Schritt ist optional.
3. Klicken Sie auf _Create project_, um das Projekt zu erstellen.

![PlayCanvas-Editor – Neues Projekt](playcanvas-editor-newproject.png)

Sobald das Projekt bereit ist, klicken Sie in der angezeigten Bestätigung auf _Open project_. Ihr neues Projekt wird in einem neuen Browser-Tab im PlayCanvas-Editor geöffnet. Dort erstellen wir unsere Szene.

## Die Szene erstellen

So sieht die Szene anfangs im Editor aus:

![PlayCanvas-Editor – Szene](playcanvas-editor-scene.png)

Obwohl es sich um ein neues, leeres Projekt handelt, müssen wir nicht ganz von vorn anfangen: Die Kamera und das gerichtete Licht sind bereits eingerichtet.
Die Szene enthält außerdem eine Box und eine Grundfläche. Wir erstellen eigene Formen. Wählen Sie deshalb im Bereich _Hierarchy_ die Entities _Box_ und _Plane_ aus (halten Sie <kbd>Ctrl</kbd> beziehungsweise unter macOS <kbd>Cmd</kbd> gedrückt, um beide auszuwählen) und drücken Sie <kbd>Delete</kbd>, um sie zu entfernen.

Nun zum kreativen Teil: Um der Szene eine Entity hinzuzufügen, klicken Sie oben im Bereich _Hierarchy_ auf die Plusschaltfläche. Wenn Sie den Mauszeiger darüber bewegen, erscheint die Beschriftung „Add Entity“ – genau das möchten wir tun. Eine Entity ist ein beliebiges Objekt in der Szene. Das kann eine Box, ein Zylinder oder ein Kegel sein, aber auch eine Kamera, ein Licht oder eine Tonquelle. Nach einem Klick auf die Schaltfläche erscheint ein Menü mit verschiedenen Entities. Wählen Sie _3D_ > _Box_ aus. Die Box wird der Szene hinzugefügt.

![PlayCanvas-Editor – Neue Box](playcanvas-editor-newbox.png)

Die Box wird mit Standardwerten erstellt: Breite, Höhe und Tiefe sind auf 1 gesetzt, und sie befindet sich in der Mitte der Szene. Sie können sie mit der Maus verschieben oder im Bereich _Inspector_ auf der rechten Seite neue Werte eingeben.

![PlayCanvas-Editor – Box](playcanvas-editor-box.png)

Um Farbe in die Szene zu bringen, benötigen wir ein neues Material für die Box. Klicken Sie im Bereich _Assets_ auf die Plusschaltfläche und wählen Sie im angezeigten Menü _Material_, um ein neues Material zu erstellen.

![PlayCanvas-Editor – Neues Material](playcanvas-editor-newmaterial.png)

Die Eigenschaften Ihres neuen Materials sollten nun rechts im Bereich _Inspector_ angezeigt werden. Falls nicht, klicken Sie im Bereich _Assets_ auf das Material. Bearbeiten Sie das Textfeld _Name_, um dem Material einen eindeutigen Namen zu geben (wir haben _boxMaterial_ gewählt). So können wir uns später leichter merken, wofür es gedacht ist – denn wir werden noch weitere Materialien hinzufügen!

![PlayCanvas-Editor – Material der Box](playcanvas-editor-boxmaterial.png)

Um die Farbe zu ändern, verwenden wir den Abschnitt _Diffuse_ in den Materialeigenschaften. Klappen Sie _Diffuse_ auf und klicken Sie auf das farbige Feld neben _Color_. Dadurch öffnet sich ein Farbwähler. Dort können Sie die gewünschte Farbe anklicken oder unten im Textfeld als Hexadezimalwert eingeben. Wir haben ein Blau mit dem Hexadezimalwert `0095DD` gewählt. Geben Sie diesen Wert in das Textfeld ein und drücken Sie die Eingabetaste, um ihn zu übernehmen.

> [!NOTE]
> Ja, Sie haben richtig gelesen: Sie müssen den Hexadezimalwert ohne das Rautezeichen eingeben.

![PlayCanvas-Editor – Diffuse-Farbe](playcanvas-editor-diffusecolor.png)

Nun können wir das farbige Material auf die Form anwenden: Ziehen Sie die Miniaturansicht des Materials aus dem Bereich _Assets_ am unteren Bildschirmrand auf die Box in der Szene. Die Box wird blau:

![PlayCanvas-Editor – Material auf die Box ziehen](playcanvas-editor-boxdrop.png)

Damit haben wir eine blaue Box erstellt. Klicken Sie im Bereich _Hierarchy_ auf die Entity _Box_, um ihre Eigenschaften im _Inspector_ anzuzeigen. Dort finden Sie Optionen zum Ändern von Position, Rotation und Skalierung. Geben Sie für die Rotation die Werte X: 10 und Y: 20 ein.

![PlayCanvas-Editor – Rotation](playcanvas-editor-rotate.png)

Klicken Sie nun oben rechts im Ansichtsfenster auf _Launch_ (das Wiedergabesymbol), um die Szene zu starten und zu rendern. Sie wird in einem separaten Browser-Tab geöffnet.

![PlayCanvas-Editor – Starten](playcanvas-editor-launch.png)

Das sieht gut aus! Fügen wir der Szene weitere Formen hinzu, um sie interessanter zu gestalten.

![PlayCanvas-Editor – Gerenderte Box](playcanvas-editor-boxrender.png)

## Weitere Formen hinzufügen

Verschieben Sie die Box nach links, damit Platz für die nächste Form entsteht. Geben Sie dazu für ihre X-Position den Wert -2 ein.

Weitere Formen fügen Sie ganz ähnlich wie die Box hinzu. Klicken Sie im Bereich _Hierarchy_ auf die Entity _Root_, damit die neue Form auf der obersten Ebene und nicht als untergeordnetes Element der Box eingefügt wird. Klicken Sie dann auf die Plusschaltfläche _Add Entity_ und wählen Sie im Menü _3D_ > _Cylinder_. Dadurch wird der Szene ein Zylinder hinzugefügt.

![PlayCanvas-Editor – Zylinder](playcanvas-editor-cylinder.png)

Gehen Sie nun wie beim Einfärben der Box vor:

- Erstellen Sie über die Plusschaltfläche im Bereich _Assets_ ein neues Material.
- Stellen Sie sicher, dass das neue Material im Bereich _Assets_ ausgewählt ist, damit seine Eigenschaften im _Inspector_ erscheinen.
- Geben Sie dem Material einen Namen, beispielsweise `cylinderMaterial`.
- Klappen Sie _Diffuse_ auf und klicken Sie auf den Farbwähler. Wählen Sie Orange (wir haben `FF9500` verwendet).
- Ziehen Sie die Miniaturansicht von `cylinderMaterial` auf den Zylinder in der Szene, um die Farbe anzuwenden.

![PlayCanvas-Editor – Material des Zylinders](playcanvas-editor-cylindermaterial.png)

Gehen Sie genauso vor, um der Szene einen Kegel hinzuzufügen. Geben Sie ihm eine gräuliche Farbe (wir haben `#EAEFF2` verwendet) und für die X-Position den Wert 2. Der Kegel erscheint zunächst an derselben Stelle wie der Zylinder, sodass er in der Szene schwer anzuklicken ist. Wählen Sie stattdessen im Bereich _Hierarchy_ die Entity _Cone_, um ihre Eigenschaften im _Inspector_ anzuzeigen. Ihre Szene sollte nun drei Formen enthalten und ungefähr so aussehen:

![PlayCanvas-Editor – Kegel](playcanvas-editor-cone.png)

## Die Szene animieren

3D-Modelle zu animieren, mag [fortgeschritten](https://developer.playcanvas.com/tutorials/anim-blending/) erscheinen. Wir möchten jedoch nur einige Eigenschaften eines Objekts steuern – dafür können wir eine Script-Komponente verwenden. Klicken Sie im Bereich _Assets_ auf die Plusschaltfläche, wählen Sie _Script_ und nennen Sie die neue Script-Datei `boxAnimation.mjs`. An der Dateiendung `.mjs` erkennt der Editor, dass das Script als JavaScript-Modul erstellt werden soll. Dies ist die empfohlene Vorgehensweise für PlayCanvas-Scripts.

![PlayCanvas-Editor – Animation der Box](playcanvas-editor-boxanimation.png)

Doppelklicken Sie auf die Datei, um den Code-Editor zu öffnen. Die Datei enthält bereits grundlegenden Code: eine Klasse `BoxAnimation`, die die Klasse `Script` der Engine erweitert, einen `scriptName`, anhand dessen der Editor das Script identifiziert, sowie leere Methoden `initialize()` und `update()`. Besonders interessant ist die Methode `update()`: Dort können wir Code einfügen, der bei jedem Frame ausgeführt werden soll. Fügen Sie innerhalb dieser Methode die folgende Zeile ein, um die Box bei jedem Frame zu drehen:

```js
update(dt) {
  this.entity.rotate(dt * 10, dt * 20, dt * 30);
}
```

`this.entity` verweist auf das Objekt, dem das Script zugewiesen wird (die Box). Mithilfe der Variablen `dt`, die die seit dem vorherigen Frame verstrichene Zeit enthält, können wir die Box um unterschiedliche Beträge entlang aller drei Achsen drehen.

Speichern Sie die Änderungen über _Save File_ im Menü _File_ des Code-Editors (oder mit <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>S</kbd>) und wechseln Sie zurück zum Tab des Haupteditors. Gehen Sie dort wie folgt vor:

1. Stellen Sie sicher, dass die Box in der Szene ausgewählt ist.
2. Klicken Sie im _Inspector_ auf _Add Component_ und dann auf _Script_.
3. Klicken Sie in der neuen _Script_-Komponente auf _Add Script_ und wählen Sie `boxAnimation` aus der Liste der verfügbaren Scripts. Dadurch wird das Animationsscript der Box hinzugefügt.

![PlayCanvas-Editor – Script der Box](playcanvas-editor-boxscript.png)

### Der Zylinder

Für den Zylinder gehen wir ähnlich vor. Zunächst:

1. Erstellen Sie ein neues Script-Asset.
2. Nennen Sie es `cylinderAnimation.mjs`.
3. Doppelklicken Sie auf das Script-Symbol, um den Code-Editor zu öffnen.

Diesmal skalieren wir das Objekt, statt es zu drehen. Dafür benötigen wir einen Timer, der die seit Beginn der Animation verstrichene Gesamtzeit speichert. Fügen Sie der Methode `initialize()` diesen Code hinzu:

```js
this.timer = 0;
```

Fügen Sie der Methode `update()` diese beiden Zeilen hinzu:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die Methode `setLocalScale()` wendet die angegebenen Werte auf die X-, Y- und Z-Achse des Objekts an. In unserem Fall ändern wir die Skalierung des Zylinders entlang der Y-Achse. Dafür verwenden wir den Wert von `Math.sin()` für den Timer und wenden `Math.abs()` auf das Ergebnis an, damit der Wert nicht negativ wird (er liegt dann zwischen 0 und 1; Sinuswerte liegen normalerweise zwischen -1 und 1). So entsteht ein ansprechender Skalierungseffekt.

Vergessen Sie nicht, dem Zylinder das Script `cylinderAnimation` hinzuzufügen, damit die Animation angewendet wird.

### Der Kegel

Jetzt ist das letzte Objekt an der Reihe: der Kegel. Erstellen Sie eine Datei namens `coneAnimation.mjs` und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie der Methode `initialize()` die folgende Zeile hinzu:

```js
this.timer = 0;
```

Wir möchten den Kegel auf und ab bewegen. Dafür verwenden wir die Methode `setPosition()`. Fügen Sie der Methode `update()` den folgenden Code hinzu:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird bei jedem Frame animiert, indem der jeweilige Wert von `Math.sin()` für den `timer` übergeben wird. Wir haben den Wert von `this.timer` verdoppelt, damit sich der Kegel weiter nach oben bewegt.

Fügen Sie dem Kegel wie zuvor das Script `coneAnimation` hinzu.

## Die Demo ausprobieren

Starten Sie die Demo, um die Effekte zu sehen – alle Formen sollten animiert sein. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas-Editor – Formen](playcanvas-editor-shapes.png)

## Zusammenfassung

Falls Sie ihn noch nicht gelesen haben, können Sie sich jetzt den Artikel zur [PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) ansehen. Sie können auch zur Seite [Eine einfache Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder zur übergeordneten Seite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
