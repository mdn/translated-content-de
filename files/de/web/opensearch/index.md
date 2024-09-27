---
title: OpenSearch-Beschreibungsformat
slug: Web/OpenSearch
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{AddonSidebar}}

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine verwenden kann. OpenSearch wird von mindestens Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zur Dokumentation anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie z. B. Suchvorschläge und das `<SearchForm>`-Element. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Such-Plugins zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Autodiscovery von Such-Plugins](#autodiscovery_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Die Suchmaschinenfunktionalität muss die WebExtension API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei verwenden.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der unten stehenden Grundstruktur. Abschnitte in _\[eckigen Klammern]_ sollten für das spezifische Plugin, das Sie erstellen, angepasst werden.

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : Ein kurzer Name für die Suchmaschine. Er muss **16 oder weniger Zeichen** langen normalen Text enthalten, ohne HTML oder anderes Markup.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss **1024 oder weniger Zeichen** langen normalen Text enthalten, ohne HTML oder anderes Markup.
- InputEncoding
  - : Die [Zeichenkodierung](/de/docs/Glossary/Character_encoding), die beim Senden von Eingaben an die Suchmaschine verwendet werden soll.
- Image

  - : URL eines Icons für die Suchmaschine. Wenn möglich, ein 16×16 Bild des Typs `image/x-icon` (z. B. `/favicon.ico`) und ein 64×64 Bild des Typs `image/jpeg` oder `image/png` einschließen.

    Die URL kann auch das [`data:` URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:` URL von einer Icon-Datei bei [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA … DAAA=</Image>
    ```

    Firefox speichert das Icon als [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (Such-Plugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data)-Ordner `searchplugins/` gespeichert). `http:` und `https:` URLs werden in `data:` URLs umgewandelt, wenn dies geschieht.

    > [!NOTE]
    > Für Icons, die remote geladen werden (d. h. von `https://` URLs im Gegensatz zu `data:` URLs), lehnt Firefox Icons ab, die größer als **10 Kilobytes** sind.

    ![Suchvorschläge von Google, angezeigt im Suchfeld von Firefox](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden sollen. Das `template`-Attribut gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL für das Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Schlüsselwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die vom Benutzer im Suchfenster oder der Adressleiste eingegebenen Suchbegriffe zu ersetzen. Weitere unterstützte dynamische Suchparameter sind in [OpenSearch 1.1-Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json` URL-Vorlage verwendet, um eine Liste von Vorschlägen im [JSON](/de/docs/Glossary/JSON)-Format abzurufen.

## Autodiscovery von Such-Plugins

Websites mit Such-Plugins können diese bewerben, sodass Firefox-Nutzer die Plugins einfach installieren können.

Um die Autodiscovery zu unterstützen, fügen Sie ein `<link>`-Element für jedes Plugin in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="searchTitle"
  href="pluginURL" />
```

Ersetzen Sie die fettgedruckten Elemente wie unten erklärt:

- searchTitle
  - : Der Name der Suche, z. B. "Search MDC" oder "Yahoo! Search". Dies muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL zum XML-Suchplugin, damit der Browser es herunterladen kann.

Falls Ihre Seite mehrere Such-Plugins anbietet, können Sie die Autodiscovery für alle unterstützen. Zum Beispiel:

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

So kann Ihre Seite Plugins anbieten, um nach Autor oder Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Änderung des Icons im Suchfeld an, dass ein bereitgestelltes Such-Plugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Daher erhalten Nutzer _keine_ Anzeige, wenn kein Suchfeld in ihrer Benutzeroberfläche angezeigt wird. _Im Allgemeinen variiert das Verhalten je nach Browser_.

## Unterstützung automatischer Updates für OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` ein. Das `template`-Attribut sollte die URL des OpenSearch-Dokuments sein, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Derzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatischen Updates von OpenSearch-Plugins. Wenn Sie Ihr Such-Plugin auf AMO einstellen möchten, entfernen Sie die Auto-Update-Funktion, bevor Sie es einreichen.

## Fehlerbehebungstipps

Falls bei Ihrem Such-Plugin XML ein Fehler vorliegt, könnten Sie auf Probleme stoßen, wenn Sie ein entdecktes Plugin hinzufügen. Wenn die Fehlermeldung nicht hilfreich ist, könnten die folgenden Tipps Ihnen bei der Problemlösung helfen.

- Ihr Server soll OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihr XML für das Such-Plugin gut formatiert ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Ampersands (&) in der `template` URL müssen als `&amp;` escape-codiert werden, und Tags müssen mit einem abschließenden Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Das `xmlns`-Attribut ist wichtig – ohne es könnte die Fehlermeldung "Firefox konnte das Such-Plugin nicht herunterladen" angezeigt werden.
- Sie **müssen** eine `text/html` URL einschließen – Such-Plugins, die nur Atom oder [RSS](/de/docs/Glossary/RSS) URL-Typen enthalten (was gültig ist, aber von Firefox nicht unterstützt wird), erzeugen ebenfalls den Fehler "konnte das Such-Plugin nicht herunterladen".
- Remote abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox Bug 361923](https://bugzil.la/361923)).

Zusätzlich bietet der Such-Plugin-Dienst einen Logging-Mechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Voreinstellung `browser.search.log` auf `true` zu setzen. Dann erscheint die Protokollierungsinformation in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Tools ➤ Browser Tools ➤ Browser-Konsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Search provider discovery](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com hat eine [funktionierende `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - OpenSearch-Plugins erstellen. [Angepasste Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
