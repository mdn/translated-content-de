---
title: OpenSearch-Beschreibungsformat
slug: Web/OpenSearch
l10n:
  sourceCommit: 62bf567f9ab13aaf07cf4d6e624d5eb33ce13987
---

{{AddonSidebar}}

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich selbst zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine nutzen kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zu Dokumentationen anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z. B. Suchvorschläge. Dieser Artikel konzentriert sich auf die Erstellung von OpenSearch-kompatiblen Such-Plugins, die diese zusätzlichen Firefox-Funktionen unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Autodiscovery von Such-Plugins](#autodiscovery_von_such-plugins) beschrieben angekündigt werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Die Suchmaschinen-Funktion muss die WebExtension API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei verwenden.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der untenstehenden Grundvorlage. Abschnitte in _\[eckigen Klammern]_ sollten für das spezifische Plugin, das Sie schreiben, angepasst werden.

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
</OpenSearchDescription>
```

- ShortName
  - : Ein kurzer Name für die Suchmaschine. Er muss **16 oder weniger Zeichen** einfachen Textes enthalten, ohne HTML oder andere Markup-Elemente.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss **1024 oder weniger Zeichen** einfachen Textes enthalten, ohne HTML oder andere Markup-Elemente.
- InputEncoding
  - : Die {{Glossary("Character_encoding", "Zeichenkodierung")}}, die beim Senden der Eingaben an die Suchmaschine verwendet wird.
- Image

  - : URL eines Icons für die Suchmaschine. Wenn möglich, fügen Sie ein 16×16-Bild vom Typ `image/x-icon` (z. B. `/favicon.ico`) und ein 64×64-Bild vom Typ `image/jpeg` oder `image/png` ein.

    Die URL kann auch das [`data:` URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Icon-Datei bei [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

Firefox speichert das Icon als `data:`-URL im [base64](https://en.wikipedia.org/wiki/Base64)-Format (Such-Plugins werden im `searchplugins/`-Ordner des [Profils](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) gespeichert). `http:`- und `https:`-URLs werden in `data:`-URLs umgewandelt, wenn dies geschieht.

> [!NOTE]
> Für Icons, die remote geladen werden (d. h. von `https://`-URLs anstelle von `data:`-URLs), lehnt Firefox Icons ab, die größer als **10 Kilobyte** sind.

![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden. Das `template`-Attribut gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL zum Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Schlüsselwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die vom Benutzer im Suchfeld oder in der Adressleiste eingegebenen Suchbegriffe zu ersetzen. Andere unterstützte dynamische Suchparameter sind in [OpenSearch 1.1 parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json` URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}}-Format abzurufen.

## Autodiscovery von Such-Plugins

Websites mit Such-Plugins können diese so ankündigen, dass Firefox-Nutzer die Plugins leicht installieren können.

Um die Autodiscovery zu unterstützen, fügen Sie für jedes Plugin ein `<link>`-Element in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="[searchTitle]"
  href="[pluginURL]" />
```

Ersetzen Sie die Elemente in _\[eckigen Klammern\]_ wie unten erklärt:

- searchTitle
  - : Der Name der durchzuführenden Suche, z. B. "Search MDC" oder "Yahoo! Search". Dieser muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL zum XML-Suchplugin, damit der Browser es herunterladen kann.

Wenn Ihre Seite mehrere Such-Plugins bietet, können Sie die Autodiscovery für alle unterstützen. Zum Beispiel:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Author"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: By Title"
  href="http://example.com/mysitetitle.xml" />
```

Auf diese Weise kann Ihre Site Plugins anbieten, um nach Autor oder Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Icon-Änderung im Suchfeld an, dass ein bereitgestelltes Such-Plugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Wenn also kein Suchfeld in der Benutzeroberfläche des Benutzers angezeigt wird, erhalten sie _keinerlei_ Indikation. _Im Allgemeinen variiert das Verhalten je nach Browser._

## Unterstützung automatischer Updates für OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das `template`-Attribut sollte die URL des OpenSearch-Dokuments sein, zu dem automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Zurzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatische Aktualisierung von OpenSearch-Plugins. Wenn Sie Ihr Such-Plugin auf AMO veröffentlichen möchten, entfernen Sie die automatische Update-Funktion, bevor Sie es einreichen.

## Tipps zur Fehlersuche

Wenn ein Fehler in Ihrer Suchplugin-XML-Datei vorliegt, können Sie beim Hinzufügen eines entdeckten Plugins auf Fehler stoßen. Wenn die Fehlermeldung nicht hilfreich ist, könnten die folgenden Tipps Ihnen helfen, das Problem zu finden.

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihre Suchplugin-XML richtig formatiert ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Kaufmännische Und-Zeichen (&) in der `template`-URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem abschließenden Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Das `xmlns`-Attribut ist wichtig — ohne es könnten Sie die Fehlermeldung "Firefox konnte das Such-Plugin nicht herunterladen" erhalten.
- Sie **müssen** eine `text/html`-URL einschließen — Such-Plugins, die nur Atom- oder {{Glossary("RSS", "RSS")}}-URL-Typen beinhalten (was gültig, jedoch von Firefox nicht unterstützt wird), erzeugen ebenfalls die Fehlermeldung "konnte das Such-Plugin nicht herunterladen".
- Remote abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox Bug 361923](https://bugzil.la/361923)).

Zusätzlich bietet der Suchplugin-Dienst einen Protokollierungsmechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Voreinstellung `browser.search.log` auf `true` zu setzen. Dann werden Protokollinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox angezeigt (Werkzeuge ➤ Browser-Werkzeuge ➤ Browser-Konsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Search provider discovery](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Tab zur Suche](https://www.chromium.org/tab-to-search/)
- imdb.com hat eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - erstellen Sie OpenSearch-Plugins. [Angepasstes Suchen durch Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
