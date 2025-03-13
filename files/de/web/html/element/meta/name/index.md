---
title: Standardmetadaten-Namen
slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

Das {{htmlelement("meta")}}-Element kann verwendet werden, um Dokumentmetadaten in Form von Name-Wert-Paaren bereitzustellen, wobei das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut den Metadaten-Namen und das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut den Wert angibt.

### Im HTML-Standard definierte Standardmetadaten-Namen

Der HTML-Standard definiert die folgenden Standardmetadaten-Namen:

- `application-name`: der Name der Anwendung, die auf der Webseite läuft.

  > [!NOTE]
  >
  > - Browser können dies verwenden, um die Anwendung zu identifizieren. Es ist unterschiedlich zum {{HTMLElement("title")}}-Element, das normalerweise den Anwendungsnamen enthält, aber auch Informationen wie den Dokumentnamen oder einen Status enthalten kann.
  > - Einzelne Webseiten sollten keinen `application-name` definieren.

- `author`: der Name des Autors des Dokuments.
- `description`: eine kurze und genaue Zusammenfassung des Seiteninhalts. Suchmaschinen wie [Google](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions) können dieses Feld verwenden, um das Erscheinungsbild der Webseite in den Suchergebnissen zu steuern.
- `generator`: die Kennung der Software, die die Seite erzeugt hat.
- `keywords`: für den Seiteninhalt relevante Wörter, getrennt durch Kommas.
- `referrer`: steuert den HTTP-{{httpheader("Referer")}}-Header von Anfragen, die vom Dokument gesendet werden:

  <table class="standard-table">
    <caption>
      Werte für das
      <code>content</code>
      Attribut von
      <code>&#x3C;meta name="referrer"></code>
    </caption>
    <tbody>
      <tr>
        <td><code>no-referrer</code></td>
        <td>
          Sendet keinen HTTP-{{httpheader("Referer")}}-Header.
        </td>
      </tr>
      <tr>
        <td><code>origin</code></td>
        <td>Sendet den {{Glossary("origin", "origin")}} des Dokuments.</td>
      </tr>
      <tr>
        <td><code>no-referrer-when-downgrade</code></td>
        <td>
          Sendet die vollständige URL, wenn das Ziel mindestens genauso sicher ist
          wie die aktuelle Seite (HTTP(S)→HTTPS), sendet jedoch keinen Referrer,
          wenn es weniger sicher ist (HTTPS→HTTP). Dies ist das Standardverhalten.
        </td>
      </tr>
      <tr>
        <td><code>origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen mit gleicher
          Herkunft, sendet jedoch nur den Ursprung in anderen Fällen.
        </td>
      </tr>
      <tr>
        <td><code>same-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen mit gleicher
          Herkunft. Fremde Herkunftsanfragen enthalten keinen Referrer-Header.
        </td>
      </tr>
      <tr>
        <td><code>strict-origin</code></td>
        <td>
          Sendet den Ursprung, wenn das Ziel mindestens genauso sicher ist wie die
          aktuelle Seite (HTTP(S)→HTTPS), sendet jedoch keinen Referrer, wenn es
          weniger sicher ist (HTTPS→HTTP).
        </td>
      </tr>
      <tr>
        <td><code>strict-origin-when-cross-origin</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen mit gleicher
          Herkunft. Sendet den Ursprung, wenn das Ziel mindestens genauso sicher ist
          wie die aktuelle Seite (HTTP(S)→HTTPS). Andernfalls wird kein Referrer
          gesendet.
        </td>
      </tr>
      <tr>
        <td><code>unsafe-URL</code></td>
        <td>
          Sendet die vollständige URL (ohne Parameter) für Anfragen mit gleicher
          oder fremder Herkunft.
        </td>
      </tr>
    </tbody>
  </table>

  > [!NOTE]
  >
  > - Das dynamische Einfügen von `<meta name="referrer">` (mit [`document.write()`](/de/docs/Web/API/Document/write) oder [`appendChild()`](/de/docs/Web/API/Node/appendChild)) macht das Referrer-Verhalten unvorhersehbar.
  > - Wenn mehrere widersprüchliche Richtlinien definiert sind, wird die `no-referrer`-Richtlinie angewandt.

- [`theme-color`](/de/docs/Web/HTML/Element/meta/name/theme-color): gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Das `content`-Attribut enthält einen gültigen CSS {{cssxref("&lt;color&gt;")}}. Das `media`-Attribut mit einer gültigen Medienabfragenliste kann eingeschlossen werden, um das Medium festzulegen, auf das sich die Metadaten zur Themafarbe beziehen.
- <a id="color-scheme" href="#color-scheme">`color-scheme`</a>: gibt ein oder mehrere Farbdesigns an, mit denen das Dokument kompatibel ist.

  Der Browser verwendet diese Informationen zusammen mit den Browser- oder Geräteeinstellungen des Benutzers, um zu bestimmen, welche Farben für alles verwendet werden, von Hintergründen und Vordergründen bis hin zu Formsteuerungen und Bildlaufleisten. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität mit und die Präferenzreihenfolge für helle und dunkle Farbmodi anzugeben.

  Der Wert der `content`-Eigenschaft für `color-scheme` kann einer der folgenden sein:

  - `normal`
    - : Das Dokument kennt keine Farbdesigns und sollte mit der Standardfarbpalette gerendert werden.
  - `light`, `dark`, `light dark`, `dark light`
    - : Ein oder mehrere vom Dokument unterstützte Farbdesigns. Ein Farbdesign mehrmals anzugeben, hat den gleichen Effekt, als würde es nur einmal angegeben. Mehrere Farbdesigns anzugeben, bedeutet, dass das erste Design vom Dokument bevorzugt wird, aber dass das zweite angegebene Design akzeptabel ist, wenn der Benutzer es bevorzugt.
  - `only light`
    - : Gibt an, dass das Dokument _nur_ den Lichtmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. Laut Spezifikation ist `only dark` _nicht gültig_, da die erzwungene Darstellung eines Dokuments im Dunkelmodus, wenn es nicht wirklich damit kompatibel ist, zu unlesbarem Inhalt führen kann; alle großen Browser arbeiten standardmäßig im Lichtmodus, wenn nicht anders konfiguriert.

  Zum Beispiel, um anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch im Lichtmodus funktionell gerendert wird:

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  Dies funktioniert auf Dokumentebene auf dieselbe Weise, wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft es einzelnen Elementen ermöglicht, ihre bevorzugten und akzeptierten Farbdesigns anzugeben. Ihre Stile können sich dem aktuellen Farbschema mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} anpassen.

### Standardmetadaten-Namen, die in anderen Spezifikationen definiert sind

Die CSS Device Adaptation-Spezifikation definiert den folgenden Metadatennamen:

- `viewport`: gibt Hinweise zur Größe der Anfangsgröße des {{Glossary("viewport", "Sichtfelds")}}.

  <table class="fullwidth-table">
    <caption>
      Werte für den Inhalt von
      <code>&#x3C;meta name="viewport"></code>
    </caption>
    <thead>
      <tr>
        <th scope="col">Wert</th>
        <th scope="col">Mögliche Unterwerte</th>
        <th scope="col">Beschreibung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>width</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-width</code></td>
        <td>
          Definiert die Pixelbreite des Sichtfelds, bei der Sie möchten, dass die
          Website gerendert wird.
        </td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td>Eine positive ganze Zahl oder der Text <code>device-height</code></td>
        <td>Definiert die Höhe des Sichtfelds. Wird von keinem Browser verwendet.</td>
      </tr>
      <tr>
        <td><code>initial-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das Verhältnis zwischen der Gerätebreite (<code>device-width</code>
          im Hochformat oder <code>device-height</code> im Querformat) und der
          Größe des Sichtfelds.
        </td>
      </tr>
      <tr>
        <td><code>maximum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das maximale Vergrößerungsverhältnis. Es muss größer oder gleich
          dem <code>minimum-scale</code> sein, ansonsten ist das Verhalten undefiniert.
          Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert
          sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>minimum-scale</code></td>
        <td>Eine positive Zahl zwischen <code>0.0</code> und <code>10.0</code></td>
        <td>
          Definiert das minimale Zoomniveau. Es muss kleiner oder gleich dem
          <code>maximum-scale</code> sein, ansonsten ist das Verhalten undefiniert.
          Browsereinstellungen können diese Regel ignorieren und iOS10+ ignoriert
          sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>user-scalable</code></td>
        <td><code>yes</code> oder <code>no</code></td>
        <td>
          Wenn auf <code>no</code> gesetzt, kann der Benutzer nicht in die Webseite
          hineinzoomen. Der Standardwert ist <code>yes</code>. Browsereinstellungen
          können diese Regel ignorieren, und iOS10+ ignoriert sie standardmäßig.
        </td>
      </tr>
      <tr>
        <td><code>viewport-fit</code></td>
        <td><code>auto</code>, <code>contain</code> oder <code>cover</code></td>
        <td>
          <p>
            Der Wert <code>auto</code> beeinflusst das anfängliche Layout-Sichtfeld
            nicht, und die gesamte Webseite ist sichtbar.
          </p>
          <p>
            Der Wert <code>contain</code> bedeutet, dass das Sichtfeld so skaliert
            wird, dass es das größte innerhalb des Displays eingeschriebene Rechteck
            einfügt.
          </p>
          <p>
            Der Wert <code>cover</code> bedeutet, dass das Sichtfeld skaliert wird,
            um das Anzeigegerät auszufüllen. Es wird dringend empfohlen, die
            Variablen für den <a href="/de/docs/Web/CSS/env">sicheren Bereich</a>
            zu verwenden, um sicherzustellen, dass wichtige Inhalte nicht außerhalb
            der Anzeige landen.
          </p>
        </td>
      </tr>
    </tbody>
  </table>

  > [!WARNING]
  >
  > Das Deaktivieren der Zoom-Funktionen durch Einstellen von `user-scalable` auf einen Wert von `no` verhindert, dass Menschen mit Sehbehinderungen den Seiteninhalt lesen und verstehen können.
  >
  > - [MDN erklärt WCAG, Richtlinie 1.4-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
  > - [Erläuterung des Erfolgskriteriums 1.4.4 | W3C erklärt WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### Andere Metadaten-Namen

#### Namen, die im WHATWG MetaExtensions-Wiki definiert sind

Die [WHATWG Wiki MetaExtensions Seite](https://wiki.whatwg.org/wiki/MetaExtensions) enthält eine große Anzahl nicht-standardmäßiger Metadaten-Namen, die bisher nicht formell angenommen wurden; jedoch werden einige der dort enthaltenen Namen bereits häufig in der Praxis verwendet – einschließlich der folgenden:

- `creator`: der Name des Schöpfers des Dokuments, wie eine Organisation oder Institution. Wenn es mehrere gibt, sollten mehrere {{HTMLElement("meta")}}-Elemente verwendet werden.
- `googlebot`, ein Synonym von `robots`, wird nur von Googlebot befolgt (dem Indexierungscrawler für Google).
- `publisher`: der Name des Verlegers des Dokuments.
- `robots`: das Verhalten, das kooperative Crawler oder "Roboter" mit der Seite verwenden sollten. Es ist eine kommagetrennte Liste der unten stehenden Werte:

  | Wert           | Beschreibung                                                                                           | Verwendet von                                                                                                                                                                                                                                            |
  | -------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | Erlaubt dem Roboter, die Seite zu indexieren (Standard).                                               | Alle                                                                                                                                                                                                                                                     |
  | `noindex`      | Fordert den Roboter auf, die Seite nicht zu indexieren.                                                | Alle                                                                                                                                                                                                                                                     |
  | `follow`       | Erlaubt dem Roboter, den Links auf der Seite zu folgen (Standard).                                     | Alle                                                                                                                                                                                                                                                     |
  | `nofollow`     | Fordert den Roboter auf, den Links auf der Seite nicht zu folgen.                                      | Alle                                                                                                                                                                                                                                                     |
  | `all`          | Entspricht `index, follow`                                                                             | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1)                                                                                                                            |
  | `none`         | Entspricht `noindex, nofollow`                                                                         | [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1)                                                                                                                            |
  | `noarchive`    | Fordert die Suchmaschine auf, den Seiteninhalt nicht zu cachen.                                        | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | Verhindert die Anzeige einer Beschreibung der Seite in den Suchmaschinenergebnissen.                   | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                     |
  | `noimageindex` | Fordert diese Seite auf, nicht als die verweisende Seite eines indizierten Bildes angezeigt zu werden. | [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)                                                                                                                                                                    |
  | `nocache`      | Synonym von `noarchive`.                                                                               | [Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                                            |

  > [!NOTE]
  >
  > - Nur kooperative Roboter befolgen diese Regeln. Erwarten Sie nicht, dass Sie E-Mail-Erntewerkzeuge damit verhindern können.
  > - Der Roboter muss die Seite dennoch abrufen, um diese Regeln zu lesen. Um Bandbreitenverbrauch zu vermeiden, ziehen Sie in Betracht, ob die Verwendung einer _{{Glossary("robots.txt", "robots.txt")}}_-Datei geeigneter ist.
  > - Das `<meta name="robots">`-Element und die `robots.txt`-Datei dienen unterschiedlichen Zwecken: `robots.txt` steuert das Crawlen von Seiten und beeinflusst nicht das Indexieren oder anderes Verhalten, das vom `robots`-Meta gesteuert wird. Eine Seite, die nicht gecrawlt werden kann, kann dennoch indiziert werden, wenn sie von einem anderen Dokument referenziert wird.
  > - Wenn Sie eine Seite entfernen möchten, funktioniert `noindex`, aber erst nachdem der Roboter die Seite erneut besucht hat. Stellen Sie sicher, dass die `robots.txt`-Datei keine erneuten Besuche verhindert.
  > - Einige Werte schließen sich gegenseitig aus, wie `index` und `noindex` oder `follow` und `nofollow`. In diesen Fällen ist das Verhalten des Roboters undefiniert und kann zwischen ihnen variieren.
  > - Einige Crawler-Roboter, wie Google, Yahoo und Bing, unterstützen dieselben Werte für den HTTP-Header {{HTTPHeader("X-Robots-Tag")}}; dies ermöglicht es auch Nicht-HTML-Dokumenten wie Bildern, diese Regeln zu verwenden.

#### Andere Namen

- `application-title`: Wird verwendet, um die Titelleiste einer App für Webanwendungen anzupassen, die als eigenständige Apps auf unterstützenden Desktop-Betriebssystemen installiert sind. Während der Textinhalt des {{HTMLElement("title")}}-Elements normalerweise in Browser-Tabs angezeigt wird, wenn die App in einem Browser ausgeführt wird, kann der Metadatenname `application-title` verwendet werden, um einen anderen Titel für die Anwendung festzulegen, wenn sie als eigenständig installierte App ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport `<meta>`-Tag](/de/docs/Web/HTML/Viewport_meta_tag)
- [Metadaten: das `<meta>`-Element](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
