---
title: ICC-Farbkorrektur in Firefox
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Obwohl die Unterstützung für Farbkorrektur in Firefox 3 eingeführt wurde, war sie standardmäßig deaktiviert, was einige Änderungen im about:config-Fenster erforderte, um sie zu aktivieren. Firefox 3.5 behebt die Probleme, die dazu führten, dass sie in der vorherigen Version standardmäßig deaktiviert war, und jetzt werden Bilder mit [International Color Consortium](https://www.color.org/index.xalter) (ICC)-Tags standardmäßig farbkorrigiert.

Das untenstehende Bild ist in drei Abschnitte unterteilt. Die obere linke Ecke zeigt das Bild, wie es von Firefox 2 dargestellt wird. Die obere rechte Ecke zeigt, wie das Bild in Firefox 3 gerendert wird. Unten wird das Bild in Photoshop gerendert.

![Eine lila Blume, dargestellt in Firefox 2, Firefox 3 und Photoshop.](iccsample.jpg)

Wie Sie sehen können, rendern Firefox 3 und Photoshop das Bild identisch, da beide das eingebettete Farbkorrekturprofil unterstützen. Firefox 2 ignoriert das Profil, was zu nicht übereinstimmenden Farben führt.

## Konfiguration der Farbkorrektur

Die Farbkorrektur kann durch Festlegen des Wertes der Einstellung `gfx.color_management.mode` gesteuert werden, wie folgt:

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
      <td>Volles Farbmanagement.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Farbmanagement nur auf getaggte Bilder angewendet.
        <strong>(Standard in Firefox 3.5.)</strong>
      </td>
    </tr>
  </tbody>
</table>

Vollständiges Farbmanagement bedeutet, dass alles, was von Firefox gerendert wird, mit Ausnahme von Plugins, farbkorrigiert wird.

### Spezifizieren eines Farbprofils

Sie können auch ein bestimmtes Farbprofil für Ihre Hardware angeben, indem Sie den Wert der Einstellung `gfx.color_management.display_profile` auf den Pfad zu einem Farbprofil setzen, das verwendet werden soll.

Wenn kein Pfad für das Farbprofil angegeben ist, fragt Firefox das Betriebssystem ab und verwendet das konfigurierte Farbprofil.

### Spezifizieren eines Standard-Rendereintents

Zusätzlich können Sie den Wert der Einstellung `gfx.color_management.rendering_intent` festlegen, um einen Standard-Rendereintent anzugeben. Standardmäßig wird der von Bildern angegebene Intent ignoriert, es sei denn, Sie geben -1 für diesen Wert an.

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
        Eingebetteten Intent verwenden. Standardmäßig wird der eingebettete Intent auf Bildern ignoriert.
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Wahrnehmungsbezogen. Veranlasst Firefox, das Bild so zu rendern, dass die Details im gesamten Tonwertbereich des Bildes erhalten bleiben. Nützlich für die allgemeine Darstellung von Bildern, insbesondere für Fotografien und andere Bilder.
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Medienrelativ-colorimetrisch. Dies skaliert das Farbspektrum so um, dass der Weißpunkt des Wiedergabemediums (wie z.B. des Bildschirms) dem Weißpunkt des Referenzmediums zugeordnet wird. Dies ist besonders nützlich für Farben, die auf ein Medium mit einem kleineren Farbumfang als das Referenzmedium abgebildet wurden.
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Sättigung. Dies bewahrt die Lebendigkeit der Farbe auf Kosten der Genauigkeit des Farbtons. Dies ist besonders nützlich für Diagramme und andere Medien, deren Farben hervorstechen sollen, während eine präzise Farbtonreproduktion weniger wichtig ist.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        ICC-Absolute colorimetrisch. Dies ist besonders nützlich für Sonderfarben und bei der Simulation eines Mediums auf einem anderen, da es eingebaute Farben nicht verändert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Firefox 3.5 rendern die Intents wahrnehmungsbezogen, medienrelativ und sättigend alle auf die gleiche Weise.

### Vorbehalte

Das neue QCMS-Farbmanagementsystem, das in Firefox 3.5 eingeführt wurde, unterstützt derzeit nur ICC-Version-2-Farbprofile, nicht Version 4. Dies kann dazu führen, dass Bilder zu dunkel erscheinen. Siehe [Bug 488800](https://bugzil.la/488800) und den [ICC-Version-4-Profiltest](https://www.color.org/version4html.xalter).

## Siehe auch

- [So Many Colors](https://bholley.wordpress.com/2008/09/12/so-many-colors/) (Blog-Beitrag)
- [Color Profiles in Firefox 3](https://johnresig.com/blog/color-profiles/) (Blog-Beitrag)
- [International Color Consortium](https://www.color.org/index.xalter)
