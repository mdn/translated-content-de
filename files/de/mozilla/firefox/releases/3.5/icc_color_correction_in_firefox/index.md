---
title: ICC-Farbkorrektur in Firefox
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Obwohl die Unterstützung für die Farbkorrktur in Firefox 3 eingeführt wurde, war sie standardmäßig deaktiviert, was einige Anpassungen im about:config-Fenster erforderte, um sie zu aktivieren. Firefox 3.5 behebt die Probleme, die in der vorherigen Version dazu führten, dass sie standardmäßig deaktiviert war, und nun werden Bilder mit [International Color Consortium](https://www.color.org/index.xalter) (ICC) Tags standardmäßig farbkorrigiert.

Das Bild unten ist in drei Abschnitte unterteilt. Die obere linke Ecke zeigt das Bild, wie es in Firefox 2 gerendert wird. Die obere rechte Ecke zeigt, wie das Bild in Firefox 3 gerendert wird. Der untere Teil zeigt das Bild, wie es in Photoshop gerendert wird.

![Eine lila Blume, wie sie in Firefox 2, Firefox 3 und Photoshop gerendert wird.](iccsample.jpg)

Wie Sie sehen, rendern Firefox 3 und Photoshop das Bild identisch, da beide das eingebettete Farbkorrkturprofil unterstützen. Firefox 2 ignoriert das Profil, was zu unpassenden Farben führt.

## Konfigurieren der Farbkorrktur

Die Farbkorrktur kann gesteuert werden, indem der Wert der `gfx.color_management.mode`-Einstellung wie folgt gesetzt wird:

<table>
  <tbody>
    <tr>
      <td>Wert</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Farbmanagement deaktiviert. <strong>(Standard in Firefox 3.)</strong>
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>Umfassendes Farbmanagement.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Farbmanagement wird nur auf getaggte Bilder angewendet.
        <strong>(Standard in Firefox 3.5.)</strong>
      </td>
    </tr>
  </tbody>
</table>

Umfassendes Farbmanagement bedeutet, dass alles, was von Firefox gerendert wird (mit Ausnahme von Plugins), farbkorrigiert wird.

### Spezifizieren eines Farbprofils

Sie können auch ein bestimmtes Farbprofil für Ihre Hardware angeben, indem Sie den Wert der `gfx.color_management.display_profile`-Einstellung auf den Pfad zu einem zu verwendenden Farbprofil einstellen.

Wenn kein Pfad für das Farbprofil angegeben ist, fragt Firefox das Betriebssystem ab und verwendet dessen konfiguriertes Farbprofil.

### Spezifizieren einer Standarddarstellungsabsicht

Zusätzlich können Sie den Wert der `gfx.color_management.rendering_intent`-Einstellung festlegen, um eine Standarddarstellungsabsicht anzugeben. Standardmäßig wird die von Bildern angegebene Absicht ignoriert, es sei denn, Sie geben für diesen Wert -1 an.

Die folgende Tabelle listet die möglichen Werte auf.

<table>
  <tbody>
    <tr>
      <td>Wert</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>-1</td>
      <td>
        Eingebettete Absicht verwenden. Standardmäßig wird die in den Bildern
        eingebettete Absicht ignoriert.
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Perzeptuell. Fordert Firefox auf, das Bild so zu rendern, dass Details im
        gesamten Tonwertumfang des Bildes erhalten bleiben. Nützlich für die
        allgemeine Bildanzeige in typischen Fällen, insbesondere für Fotografien
        und andere Bilder.
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Medienrelativ kolorimetrisch. Dies skaliert das Farbspektrum so, dass
        der Weißpunkt des Render-Mediums (z.B. des Bildschirms) auf den
        Weißpunkt des Referenzmediums abgebildet wird. Dies ist besonders
        nützlich für Farben, die einem Medium mit einem kleineren Farbumfang als
        das Referenzmedium zugeordnet wurden.
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Sättigung. Dies bewahrt die Lebhaftigkeit der Farben auf Kosten der
        Genauigkeit der Farbtonwiedergabe. Dies ist besonders nützlich für
        Diagramme und Schaubilder und andere Medien, deren Farben "knallen"
        sollen, während die genaue Wiedergabe des Farbtons weniger wichtig ist.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        ICC-Absolut kolorimetrisch. Dies ist besonders nützlich für
        Volltonfarben und bei der Simulation eines Mediums auf einem anderen, da
        es die In-Gamut-Farben nicht verändert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Firefox 3.5 rendern perzeptuelle, medienrelative und Sättigungs-Absichten alle auf die gleiche Weise.

### Hinweise

Das neue QCMS-Farbmanagementsystem, das in Firefox 3.5 eingeführt wurde, unterstützt derzeit nur ICC-Version-2-Farbprofile, nicht Version 4. Dies kann dazu führen, dass Bilder zu dunkel sind. Siehe [Bug 488800](https://bugzil.la/488800) und den [ICC-Version-4-Profiltest](https://www.color.org/version4html.xalter).

## Siehe auch

- [So Many Colors](https://bholley.wordpress.com/2008/09/12/so-many-colors/) (Blogeintrag)
- [Color Profiles in Firefox 3](https://johnresig.com/blog/color-profiles/) (Blogeintrag)
- [International Color Consortium](https://www.color.org/index.xalter)
