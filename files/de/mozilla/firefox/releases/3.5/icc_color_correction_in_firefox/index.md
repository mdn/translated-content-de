---
title: ICC-Farbkorrektur in Firefox
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Obwohl die Unterstützung für Farbkorrektur in Firefox 3 eingeführt wurde, war sie standardmäßig deaktiviert, und es war etwas Anpassung im about:config-Fenster erforderlich, um sie zu aktivieren. Firefox 3.5 behebt die Probleme, die dafür sorgten, dass sie in der vorherigen Version standardmäßig deaktiviert war, und nun werden Bilder mit [International Color Consortium](https://www.color.org/index.xalter) (ICC)-Tagging standardmäßig farbkorrigiert.

Das Bild unten ist in drei Abschnitte unterteilt. Die obere linke Ecke zeigt das Bild so, wie es von Firefox 2 gerendert wird. Die obere rechte Ecke zeigt, wie das Bild in Firefox 3 gerendert wird. Unten wird das Bild in Photoshop gerendert.

![Eine lila Blume, gerendert von Firefox 2, Firefox 3 und Photoshop.](iccsample.jpg)

Wie Sie sehen können, rendern Firefox 3 und Photoshop das Bild identisch, da beide das eingebettete Farbkorrekturprofil unterstützen. Firefox 2 ignoriert das Profil, was zu einer nicht passenden Farbdarstellung führt.

## Konfigurieren der Farbkorrektur

Die Farbkorrektur kann durch Festlegen des Wertes der `gfx.color_management.mode`-Einstellung gesteuert werden, wie folgt:

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
        Farbmanagement wird nur auf getaggte Bilder angewendet.
        <strong>(Standard in Firefox 3.5.)</strong>
      </td>
    </tr>
  </tbody>
</table>

Vollständiges Farbmanagement bedeutet, dass alles, was von Firefox gerendert wird, mit Ausnahme von Plugins, farbkorrekt ist.

### Festlegen eines Farbprofils

Sie können auch ein spezifisches Farbprofil für Ihre Hardware festlegen, indem Sie den Wert der `gfx.color_management.display_profile`-Einstellung auf den Pfad zu einem Farbprofil setzen, das verwendet werden soll.

Wenn kein Pfad für das Farbprofil angegeben ist, fragt Firefox das Betriebssystem ab und verwendet das konfigurierte Farbprofil.

### Festlegen einer standardmäßigen Rendering-Intention

Darüber hinaus können Sie den Wert der `gfx.color_management.rendering_intent`-Einstellung festlegen, um eine standardmäßige Rendering-Intention anzugeben. Standardmäßig wird die von Bildern spezifizierte Intention ignoriert, es sei denn, Sie geben -1 für diesen Wert an.

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
        Eingebettete Intention verwenden. Standardmäßig wird die eingebettete
        Intention in Bildern ignoriert.
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Perzeptuell. Weist Firefox an, das Bild so zu rendern, dass Details im
        gesamten Tonwertbereich des Bildes erhalten bleiben. Nützlich für die
        allgemeine Anzeige von Bildern in typischen Fällen, insbesondere für
        Fotografien und andere Bilder.
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Medien-relative kolorimetrische. Dies skaliert das Farbspektrum so, dass
        der Weißpunkt des Wiedergabemediums (wie der Bildschirm) auf den
        Weißpunkt des Referenzmediums abgebildet wird. Dies ist besonders
        nützlich für Farben, die auf ein Medium mit einem kleineren Farbumfang
        als das Referenzmedium abgebildet wurden.
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Sättigung. Dies bewahrt die Lebendigkeit der Farben auf Kosten der
        Präzision des Farbtons. Dies ist besonders nützlich für Diagramme und
        Grafiken sowie für andere Medien, deren Farben "poppen" sollten, während
        eine präzise Farbwiedergabe weniger wichtig ist.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        ICC-Absolute kolorimetrische. Dies ist besonders nützlich für
        Sonderfarben und beim Simulieren eines Mediums auf einem anderen, da es
        die Farben im Farbumfang nicht verändert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Firefox 3.5 rendert die perzeptuelle, medien-relative und Sättigungs-Intention alle auf dieselbe Weise.

### Einschränkungen

Das neue QCMS-Farbmanagementsystem, das in Firefox 3.5 eingeführt wurde, unterstützt derzeit nur ICC-Version-2-Farbprofile, nicht Version 4. Dies kann dazu führen, dass Bilder zu dunkel dargestellt werden. Siehe [Bug 488800](https://bugzil.la/488800) und den [ICC-Version-4-Profiltest](https://www.color.org/version4html.xalter).

## Siehe auch

- [So Many Colors](https://bholley.wordpress.com/2008/09/12/so-many-colors/) (Blogbeitrag)
- [Color Profiles in Firefox 3](https://johnresig.com/blog/color-profiles/) (Blogbeitrag)
- [International Color Consortium](https://www.color.org/index.xalter)
