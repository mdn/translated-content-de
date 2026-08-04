---
title: ICC-Farbkorrektur in Firefox
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Obwohl die Unterstützung für die Farbkorrektur in Firefox 3 eingeführt wurde, war diese standardmäßig deaktiviert, sodass einige Anpassungen im `about:config`-Fenster erforderlich waren, um sie zu aktivieren. Firefox 3.5 behebt die Probleme, die dazu führten, dass sie in der vorherigen Version standardmäßig deaktiviert war, und nun werden Bilder mit [International Color Consortium](https://www.color.org/) (ICC)-Markierung standardmäßig farbkorrigiert.

Das untenstehende Bild ist in drei Abschnitte unterteilt. Die obere linke Ecke zeigt das Bild, wie es von Firefox 2 gerendert wurde. Die obere rechte Ecke zeigt, wie das Bild in Firefox 3 gerendert wird. Der untere Bereich zeigt das Bild, wie es in Photoshop gerendert wird.

![Eine lila Blume, dargestellt in Firefox 2, Firefox 3 und Photoshop.](iccsample.jpg)

Wie Sie sehen können, rendern Firefox 3 und Photoshop das Bild identisch, da beide das eingebettete Farbkorrekturprofil unterstützen. Firefox 2 ignoriert das Profil, was zu einer nicht übereinstimmenden Farbe führt.

## Konfiguration der Farbkorrektur

Die Farbkorrektur kann gesteuert werden, indem der Wert der `gfx.color_management.mode`-Einstellung wie folgt gesetzt wird:

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
      <td>Vollständiges Farbmanagement.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Farbmanagement wird nur auf gekennzeichnete Bilder angewendet.
        <strong>(Standard in Firefox 3.5.)</strong>
      </td>
    </tr>
  </tbody>
</table>

Vollständiges Farbmanagement bedeutet, dass alles, was von Firefox gerendert wird, mit Ausnahme von Plugins, farbkorrigiert wird.

### Spezifizierung eines Farbprofils

Sie können auch ein spezifisches Farbprofil für Ihre Hardware angeben, indem Sie den Wert der `gfx.color_management.display_profile`-Einstellung auf den Pfad zu einem zu verwendenden Farbprofil setzen.

Wenn kein Pfad für das Farbprofil angegeben ist, fragt Firefox das Betriebssystem ab und verwendet dessen konfiguriertes Farbprofil.

### Spezifizierung einer Standardwiedergabeabsicht

Zusätzlich können Sie den Wert der `gfx.color_management.rendering_intent`-Einstellung setzen, um eine Standardwiedergabeabsicht anzugeben. Standardmäßig wird die von Bildern angegebene Absicht ignoriert, es sei denn, Sie geben -1 für diesen Wert an.

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
        Eingebettete Absicht verwenden. Standardmäßig wird die eingebettete Absicht auf Bildern ignoriert.
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Perzeptiv. Weist Firefox an, das Bild so zu rendern, dass Details im gesamten Tonwertumfang des Bildes erhalten bleiben. Nützlich für den allgemeinen Gebrauch zur Anzeige von Bildern in typischen Fällen, insbesondere für Fotografien und andere Bilder.
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Medien-relativer colorimetrischer Abgleich. Dies skaliert das Farbspektrum so um, dass der Weißpunkt des Wiedergabemediums (wie der Bildschirm) auf den Weißpunkt des Referenzmediums abgebildet wird. Dies ist am nützlichsten für Farben, die auf ein Medium mit einem kleineren Gamut als das Referenzmedium abgebildet wurden.
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Sättigung. Dies bewahrt die Lebendigkeit der Farbe auf Kosten der Präzision der Farbtöne. Dies ist besonders nützlich für Diagramme und Grafiken sowie andere Medien, deren Farben "knallen" sollen, während die präzise Duplizierung von Farbtönen weniger wichtig ist.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        ICC-Absolute colorimetrischer Abgleich. Dies ist am nützlichsten für Volltonfarben und beim Simulieren eines Mediums auf einem anderen, da es in den Gamut liegende Farben nicht verändert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Firefox 3.5 werden perzeptive, medien-relative und Sättigungsabsichten alle auf die gleiche Weise gerendert.

### Vorbehalte

Das neue QCMS-Farbmanagementsystem, das in Firefox 3.5 eingeführt wurde, unterstützt derzeit nur ICC Version 2-Farbprofile, nicht Version 4. Dies kann dazu führen, dass Bilder zu dunkel erscheinen. Siehe [Bug 488800](https://bugzil.la/488800) und den [ICC Version 4 Profiltest](https://www.color.org/version4html/).

## Siehe auch

- [So Many Colors](https://bholley.wordpress.com/2008/09/12/so-many-colors/) (Blog-Beitrag)
- [Color Profiles in Firefox 3](https://johnresig.com/blog/color-profiles/) (Blog-Beitrag)
- [International Color Consortium](https://www.color.org/)
