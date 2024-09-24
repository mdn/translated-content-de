---
title: ICC-Farbkorrektur in Firefox
slug: Mozilla/Firefox/Releases/3.5/ICC_color_correction_in_Firefox
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Obwohl die Unterstützung für die Farbkorrektur in Firefox 3 eingeführt wurde, war sie standardmäßig deaktiviert, sodass sie im Fenster "about:config" erst aktiviert werden musste. Firefox 3.5 behebt die Probleme, die dazu führten, dass sie in der vorherigen Version standardmäßig deaktiviert war, und nun werden Bilder mit [International Color Consortium](https://www.color.org/index.xalter) (ICC)-Markierungen standardmäßig farbkorrigiert.

Das unten abgebildete Bild ist in drei Abschnitte unterteilt. Die obere linke Ecke zeigt das Bild, wie es von Firefox 2 gerendert wird. Die obere rechte Ecke zeigt, wie das Bild in Firefox 3 gerendert wird. Unten zeigt das Bild, wie es in Photoshop gerendert wird.

![Eine lila Blume, gerendert von Firefox 2, Firefox 3 und Photoshop.](iccsample.jpg)

Wie Sie sehen, rendern Firefox 3 und Photoshop das Bild identisch, da beide das eingebettete Farbkorrekturprofil unterstützen. Firefox 2 ignoriert das Profil, was zu einer nicht übereinstimmenden Farbe führt.

## Farbkorrektur konfigurieren

Die Farbkorrektur kann gesteuert werden, indem Sie den Wert der Einstellung `gfx.color_management.mode` wie folgt festlegen:

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
        Farbmanagement nur auf getaggte Bilder angewendet.
        <strong>(Standard in Firefox 3.5.)</strong>
      </td>
    </tr>
  </tbody>
</table>

Vollständiges Farbmanagement bedeutet, dass alles, was von Firefox gerendert wird, mit Ausnahme von Plugins, farbkorrigiert wird.

### Ein Farbprofil angeben

Sie können auch ein spezifisches Farbprofil für Ihre Hardware angeben, indem Sie den Wert der Einstellung `gfx.color_management.display_profile` auf den Pfad zu einem Farbprofil setzen, das verwendet werden soll.

Wenn kein Pfad für das Farbprofil angegeben wird, fragt Firefox das Betriebssystem ab und verwendet dessen konfiguriertes Farbprofil.

### Eine Standard-Wiedergabeabsicht angeben

Zusätzlich können Sie den Wert der Einstellung `gfx.color_management.rendering_intent` festlegen, um eine Standard-Wiedergabeabsicht anzugeben. Standardmäßig wird die von Bildern angegebene Absicht ignoriert, es sei denn, Sie geben -1 für diesen Wert an.

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
        Eingebettete Absicht verwenden. Standardmäßig wird die eingebettete
        Absicht auf Bildern ignoriert.
      </td>
    </tr>
    <tr>
      <td>0</td>
      <td>
        Perzeptiv. Weist Firefox an, das Bild so zu rendern, dass Details über
        den gesamten Tonwertbereich des Bildes erhalten bleiben. Nützlich für
        die allgemeine Anzeige von Bildern in typischen Fällen, insbesondere für
        Fotografien und andere Bilder.
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        Medienrelativ kolorimetrisch. Dies skaliert das Farbspektrum neu, sodass
        der Weißpunkt des Wiedergabemediums (wie der Bildschirm) auf den
        Weißpunkt des Referenzmediums abgebildet wird. Dies ist am nützlichsten
        für Farben, die auf ein Medium mit einem kleineren Farbraum als das
        Referenzmedium abgebildet wurden.
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Sättigung. Diese erhält die Lebendigkeit der Farben auf Kosten der
        Präzision der Farbnuance. Dies ist besonders nützlich für Diagramme und
        andere Medien, deren Farben "leuchten" sollen, während die präzise
        Duplikation der Farbnuance weniger wichtig ist.
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        ICC-Absolute kolorimetrisch. Dies ist am nützlichsten für Sonderfarben
        und wenn ein Medium auf einem anderen simuliert wird, da es die Farben
        im gültigen Bereich nicht ändert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> In Firefox 3.5 rendern perzeptive, medienrelative und Sättigungs-Absichten alle auf die gleiche Weise.

### Einschränkungen

Das neue QCMS-Farbmanagementsystem, das in Firefox 3.5 eingeführt wurde, unterstützt derzeit nur ICC-Version-2-Farbprofile, nicht Version 4. Dies kann dazu führen, dass Bilder zu dunkel dargestellt werden. Siehe [Bug 488800](https://bugzil.la/488800) und den [ICC Version 4 Profiltest](https://www.color.org/version4html.xalter).

## Siehe auch

- [So Many Colors](https://bholley.wordpress.com/2008/09/12/so-many-colors/) (Blogpost)
- [Color Profiles in Firefox 3](https://johnresig.com/blog/color-profiles/) (Blogpost)
- [International Color Consortium](https://www.color.org/index.xalter)
