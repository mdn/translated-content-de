---
title: OpenSearch-Beschreibungsformat
slug: Web/OpenSearch
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{AddonSidebar}}

Das **[OpenSearch-Beschreibungsformat](https://github.com/dewitt/opensearch)** kann verwendet werden, um die Webschnittstelle einer Suchmaschine zu beschreiben. Dies ermöglicht es einer Website, eine Suchmaschine für sich selbst zu beschreiben, sodass ein Browser oder eine andere Client-Anwendung diese Suchmaschine verwenden kann. OpenSearch wird von (mindestens) Firefox, Edge, Safari und Chrome unterstützt. (Siehe [Referenzmaterial](#referenzmaterial) für Links zur Dokumentation anderer Browser.)

Firefox unterstützt auch zusätzliche Funktionen, die nicht im OpenSearch-Standard enthalten sind, wie Suchvorschläge und das `<SearchForm>`-Element. Dieser Artikel konzentriert sich darauf, OpenSearch-kompatible Such-Plugins zu erstellen, die diese zusätzlichen Firefox-Funktionen unterstützen.

OpenSearch-Beschreibungsdateien können wie in [Autodiscovery von Such-Plugins](#autodiscovery_von_such-plugins) beschrieben beworben werden.

> [!WARNING]
> OpenSearch-Plugins können nicht mehr auf [addons.mozilla.org](https://addons.mozilla.org/) (AMO) hochgeladen werden. Suchmaschinenfunktionen müssen die WebExtension-API mit [Chrome-Einstellungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in der `manifest.json`-Datei verwenden.

## OpenSearch-Beschreibungsdatei

Die XML-Datei, die eine Suchmaschine beschreibt, folgt der unten stehenden grundlegenden Vorlage. Abschnitte in _\[eckigen Klammern]_ sollten an das spezifische Plugin angepasst werden, das Sie schreiben.

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Vollständiger Name der Suchmaschine und Zusammenfassung]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : Ein Kurztitel für die Suchmaschine. Er muss aus **16 oder weniger Zeichen** Klartext bestehen, ohne HTML oder andere Markups.
- Description
  - : Eine kurze Beschreibung der Suchmaschine. Sie muss aus **1024 oder weniger Zeichen** Klartext bestehen, ohne HTML oder andere Markups.
- InputEncoding
  - : Die zu verwendende [Zeichenkodierung](/de/docs/Glossary/Character_encoding), wenn Eingaben an die Suchmaschine übermittelt werden.
- Image

  - : URL eines Icons für die Suchmaschine. Wenn möglich, ein 16×16 Bild vom Typ `image/x-icon` (zum Beispiel `/favicon.ico`) und ein 64×64 Bild vom Typ `image/jpeg` oder `image/png` hinzufügen.

    Die URL kann auch das [`data:`-URL-Schema](/de/docs/Web/URI/Schemes/data) verwenden. (Sie können eine `data:`-URL aus einer Icon-Datei mit [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data) erstellen.)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- oder -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA … DAAA=</Image>
    ```

    Firefox speichert das Icon zwischenzeitlich als [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (Such-Plugins werden im [Profil](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) im Ordner `searchplugins/` gespeichert). `http:` und `https:` URLs werden zu `data:` URLs konvertiert, wenn dies erfolgt.

    > [!NOTE]
    > Für Icons, die aus der Ferne geladen werden (d.h. von `https://` URLs statt `data:` URLs), lehnt Firefox Icons ab, die größer als **10 Kilobytes** sind.

    ![Suchvorschläge von Google, die im Suchfeld von Firefox angezeigt werden](searchsuggestionsample.png)

- Url

  - : Beschreibt die URL oder URLs, die für die Suche verwendet werden sollen. Das Attribut `template` gibt die Basis-URL für die Suchabfrage an.

    Firefox unterstützt drei URL-Typen:

    - `type="text/html"` gibt die URL für die eigentliche Suchanfrage an.
    - `type="application/x-suggestions+json"` gibt die URL zum Abrufen von Suchvorschlägen an. Ab Firefox 63 wird `type="application/json"` als Alias dafür akzeptiert.
    - `type="application/x-moz-keywordsearch"` gibt die URL an, die verwendet wird, wenn eine Schlüsselwortsuche in der Adressleiste eingegeben wird. Dies wird nur in Firefox unterstützt.

    Für diese URL-Typen können Sie `{searchTerms}` verwenden, um die von der Benutzerin bzw. dem Benutzer im Such- oder Adressfeld eingegebenen Suchbegriffe zu ersetzen. Andere unterstützte dynamische Suchparameter werden in den [OpenSearch 1.1-Parametern](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters) beschrieben.

    Für Suchvorschläge wird das `application/x-suggestions+json` URL-Template verwendet, um eine Vorschlagsliste im [JSON](/de/docs/Glossary/JSON)-Format abzurufen.

## Autodiscovery von Such-Plugins

Websites mit Such-Plugins können für diese werben, sodass Firefox-Nutzer die Plugins einfach installieren können.

Um Autodiscovery zu unterstützen, fügen Sie ein `<link>`-Element für jedes Plugin in den `<head>` Ihrer Webseite ein:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="searchTitle"
  href="pluginURL" />
```

Ersetzen Sie die fett gedruckten Elemente wie unten erklärt:

- searchTitle
  - : Der Name der auszuführenden Suche, wie "Search MDC" oder "Yahoo! Search". Dies muss Ihrem Plugin-Datei-`<ShortName>` entsprechen.
- pluginURL
  - : Die URL zum XML-Such-Plugin, sodass der Browser es herunterladen kann.

Wenn Ihre Seite mehrere Such-Plugins anbietet, können Sie Autodiscovery für alle unterstützen. Zum Beispiel:

```html
<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: Nach Autor"
  href="http://example.com/mysiteauthor.xml" />

<link
  rel="search"
  type="application/opensearchdescription+xml"
  title="MySite: Nach Titel"
  href="http://example.com/mysitetitle.xml" />
```

Auf diese Weise kann Ihre Seite Plugins anbieten, um nach Autor oder Titel zu suchen.

> [!NOTE]
> In Firefox zeigt eine Änderung des Icons im Suchfeld an, dass ein bereitgestelltes Such-Plugin vorhanden ist. (Siehe Bild, das grüne Pluszeichen.) Wenn also im UI der Benutzerin bzw. des Benutzers kein Suchfeld angezeigt wird, erhalten sie _keine_ Anzeige. _Im Allgemeinen variiert das Verhalten zwischen den Browsern_.

## Unterstützung für automatische Updates von OpenSearch-Plugins

OpenSearch-Plugins können automatisch aktualisiert werden. Um dies zu unterstützen, fügen Sie ein zusätzliches `Url`-Element mit `type="application/opensearchdescription+xml"` und `rel="self"` hinzu. Das Attribut `template` sollte die URL des OpenSearch-Dokuments sein, auf das automatisch aktualisiert werden soll.

Zum Beispiel:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> [!NOTE]
> Zurzeit unterstützt [addons.mozilla.org](https://addons.mozilla.org/) (AMO) keine automatischen Updates von OpenSearch-Plugins. Wenn Sie Ihr Such-Plugin auf AMO anbieten möchten, entfernen Sie die Auto-Update-Funktion, bevor Sie es einreichen.

## Tipps zur Fehlerbehebung

Wenn es einen Fehler in Ihrem Such-Plugin-XML gibt, könnten Sie auf Probleme stoßen, wenn Sie ein entdecktes Plugin hinzufügen möchten. Wenn die Fehlermeldung nicht hilfreich ist, könnten die folgenden Tipps Ihnen helfen, das Problem zu finden.

- Ihr Server sollte OpenSearch-Plugins mit `Content-Type: application/opensearchdescription+xml` ausliefern.
- Stellen Sie sicher, dass Ihr Such-Plugin-XML gut formatiert ist. Sie können dies überprüfen, indem Sie die Datei direkt in Firefox laden. Kaufmännische Und-Zeichen (&) in der `template` URL müssen als `&amp;` maskiert werden, und Tags müssen mit einem schließenden Schrägstrich oder einem passenden Endtag geschlossen werden.
- Das `xmlns`-Attribut ist wichtig — ohne es könnten Sie die Fehlermeldung "Firefox konnte das Such-Plugin nicht herunterladen" erhalten.
- Sie **müssen** eine `text/html` URL einschließen — Such-Plugins, die nur Atom- oder [RSS](/de/docs/Glossary/RSS)-URLs (was gültig ist, aber von Firefox nicht unterstützt wird) enthalten, erzeugen ebenfalls die Fehlermeldung "konnte das Such-Plugin nicht herunterladen".
- Aus der Ferne abgerufene Favicons dürfen nicht größer als 10KB sein (siehe [Firefox-Bug 361923](https://bugzil.la/361923)).

Darüber hinaus bietet der Such-Plugin-Dienst einen Protokollierungsmechanismus, der für Plugin-Entwickler nützlich sein kann. Verwenden Sie `about:config`, um die Einstellung '`browser.search.log`' auf `true` zu setzen. Dann erscheinen Protokollinformationen in der [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) von Firefox (Werkzeuge ➤ Browser-Werkzeuge ➤ Browser-Konsole), wenn Such-Plugins hinzugefügt werden.

## Referenzmaterial

- [OpenSearch-Dokumentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Versionshinweise: Schnellwebsite-Suchfunktion](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Entdeckung des Suchanbieters](https://learn.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [Die Chromium-Projekte: Tab zu Suche](https://www.chromium.org/tab-to-search/)
- imdb.com hat ein [funktionierendes `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - Erstellen Sie OpenSearch-Plugins. [Benutzerdefinierte Suche über Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
