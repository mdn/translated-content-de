---
title: OpenSearch-Beschreibungsformat
slug: Web/OpenSearch
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AddonSidebar}}

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich selbst zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine nutzen kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zur Dokumentation anderer Browser.)

Firefox unterstützt außerdem zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie Suchvorschläge und das `<SearchForm>`-Element. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Such-Plugins zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Automatisches Erkennen von Such-Plugins](#automatisches_erkennen_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Die Suchmaschinenfunktion muss die WebExtension-API mit [chrome settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) im `manifest.json`-Datei verwenden.

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
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : Ein kurzer Name für die Suchmaschine. Er darf **höchstens 16 Zeichen** einfachen Texts enthalten, ohne HTML oder andere Markierungen.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie darf **höchstens 1024 Zeichen** einfachen Texts enthalten, ohne HTML oder andere Markierungen.
- InputEncoding
  - : Die {{Glossary("Character_encoding", "Zeichenkodierung")}}, die beim Übermitteln von Eingaben an die Suchmaschine verwendet werden soll.
- Image

  - : URL eines Symbols für die Suchmaschine. Wenn möglich, inkludieren Sie ein 16×16-Bild vom Typ `image/x-icon` (wie `/favicon.ico`) und ein 64×64-Bild vom Typ `image/jpeg` oder `image/png`.

    Die URL kann auch das [`data:`-URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Symboldatei mit dem [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) generieren.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA…DAAA=</Image>
    ```

    Firefox speichert das Symbol als [base64](https://en.wikipedia.org/wiki/Base64) `data:`-URL (Such-Plugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data)-Ordner `searchplugins/` gespeichert). `http:`- und `https:`-URLs werden in `data:`-URLs umgewandelt, wenn dies geschieht.

    > [!NOTE]
    > Für Symbole, die remote geladen werden (also von `https://`-URLs im Gegensatz zu `data:`-URLs), wird Firefox Symbole, die größer als **10 Kilobyte** sind, ablehnen.

    ![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden sollen. Das `template`-Attribut gibt die Basis-URL für die Suchanfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL zum Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn im Adressfeld eine Schlüsselwortsuche eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die Suchbegriffe zu ersetzen, die der Benutzer in die Suchleiste oder das Adressfeld eingegeben hat. Andere unterstützte dynamische Suchparameter sind in [OpenSearch 1.1-Parameter](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird die `application/x-suggestions+json`-URL-Vorlage verwendet, um eine Vorschlagsliste im {{Glossary("JSON", "JSON")}}-Format abzurufen.

## Automatisches Erkennen von Such-Plugins

Websites mit Such-Plugins können diese bewerben, sodass Firefox-Nutzer die Plugins einfach installieren können.

Um das automatische Erkennen zu unterstützen, fügen Sie für jedes Plugin ein `<link>`-Element in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="searchTitle"
  href="pluginURL" />
```

Ersetzen Sie die fettgedruckten Elemente wie unten erklärt:

- searchTitle
  - : Der Name der auszuführenden Suche, wie "Search MDC" oder "Yahoo! Search". Dies muss mit dem `<ShortName>` Ihrer Plugin-Datei übereinstimmen.
- pluginURL
  - : Die URL zum XML-Suchplugin, damit der Browser es herunterladen kann.

Wenn Ihre Seite mehrere Such-Plugins anbietet, können Sie die automatische Erkennung für alle unterstützen. Zum Beispiel:

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

Auf diese Weise kann Ihre Seite Plugins anbieten, um nach Autor oder Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Änderung des Symbols im Suchfeld an, dass ein bereitgestelltes Such-Plugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Wenn ein Suchfeld nicht in der Benutzerschnittstelle angezeigt wird, erhält der Benutzer _keine_ Anzeige. _Im Allgemeinen variiert das Verhalten zwischen den Browsern_.

## Unterstützung von automatischen Updates für OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` ein. Das `template`-Attribut sollte die URL des OpenSearch-Dokuments sein, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Derzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatischen Updates von OpenSearch-Plugins. Wenn Sie Ihr Such-Plugin auf AMO setzen möchten, entfernen Sie die automatische Update-Funktion, bevor Sie es einreichen.

## Tipps zur Fehlersuche

Wenn in Ihrem Such-Plugin-XML ein Fehler vorliegt, können Sie beim Hinzufügen eines erkannten Plugins auf Fehler stoßen. Wenn die Fehlermeldung nicht hilfreich ist, könnten die folgenden Tipps Ihnen helfen, das Problem zu finden.

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` bereitstellen.
- Stellen Sie sicher, dass Ihr Such-Plugin-XML gut geformt ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Kaufmännische Und-Zeichen (&) in der `template`-URL müssen als `&amp;` kodiert werden, und Tags müssen mit einem Schrägstrich oder einem passenden End-Tag geschlossen werden.
- Das `xmlns`-Attribut ist wichtig — ohne dieses könnten Sie die Fehlermeldung "Firefox konnte das Such-Plugin nicht herunterladen" erhalten.
- Sie **müssen** eine `text/html`-URL einfügen — Such-Plugins, die nur Atom- oder {{Glossary("RSS", "RSS")}}-URL-Typen enthalten (was gültig ist, aber von Firefox nicht unterstützt wird), erzeugen ebenfalls den Fehler "konnte das Such-Plugin nicht herunterladen".
- Remote abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox-Fehler 361923](https://bugzil.la/361923)).

Zusätzlich bietet der Such-Plugin-Dienst ein Protokollierungsmechanismus, der für Plugin-Entwickler nützlich sein könnte. Verwenden Sie `about:config`, um die Einstellung `browser.search.log` auf `true` zu setzen. Dann werden Protokollinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Werkzeuge ➤ Browser-Werkzeuge ➤ Browser-Konsole) angezeigt, wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge-Entwicklungsleitfaden: Erkennung von Suchanbietern](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Tab zum Suchen](https://www.chromium.org/tab-to-search/)
- imdb.com hat ein [funktionierendes `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - OpenSearch-Plugins erstellen. [Angepasste Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
