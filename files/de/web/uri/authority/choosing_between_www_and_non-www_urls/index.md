---
title: Auswahl zwischen www und non-www URLs
slug: Web/URI/Authority/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Eine wiederkehrende Frage unter Website-Besitzern ist, ob sie 'www' (`www.example.com`) oder 'non-www' (`example.com`) URLs wählen sollen. Diese Seite gibt einige Tipps, was am besten ist.

## Was sind Domainnamen?

In einer HTTP-URL wird die erste Zeichenfolge, die auf das initiale `http://` oder `https://` folgt, als Domainname bezeichnet. Dieser Domainname wird auf einem Server gehostet, wo das Dokument sich befindet.

Ein Server ist nicht notwendigerweise eine physische Maschine: Mehrere Server können auf derselben physischen Maschine existieren, oder ein Server kann von mehreren Maschinen betrieben werden, die zusammenarbeiten, um die Anfragen zu beantworten oder die Last der Anfragen zwischen ihnen zu verteilen. Der entscheidende Punkt ist, dass ein Domainname semantisch _einen einzelnen Server repräsentiert_.

## Muss ich mich also für eine Option auf meiner Website entscheiden?

- **Ja**, Sie müssen sich für eine entscheiden und dabei bleiben. Die Wahl, welche als Ihre kanonische Adresse dienen soll, liegt bei Ihnen, aber wenn Sie eine wählen, bleiben Sie dabei. Das wird Ihre Website für Ihre Benutzer und Suchmaschinen konsistenter erscheinen lassen. Dies schließt ein, immer auf die gewählte Domain zu verlinken (was nicht schwer sein sollte, wenn Sie relative URLs auf Ihrer Website verwenden) und immer Links (per E-Mail/soziale Netzwerke, etc.) zur gleichen Domain zu teilen.
- **Nein**, Sie können beide haben. Wichtig ist, dass Sie kohärent und konsistent mit der offiziellen Domain sind. **Diese offizielle Domain wird als der _kanonische_ Name bezeichnet.** Alle Ihre absoluten Links sollten diese verwenden. Dennoch können Sie die andere Domain weiterhin betreiben: HTTP erlaubt zwei Techniken, damit es für Ihre Benutzer oder Suchmaschinen klar ist, welche Domain die kanonische ist, während die nicht-kanonische Domain weiterhin funktioniert und die erwarteten Seiten bereitstellt.

Wählen Sie also eine Ihrer Domains als Ihre kanonische! Es gibt unten zwei Techniken, um die nicht-kanonische Domain weiterhin funktionieren zu lassen.

## Techniken für kanonische URLs

Es gibt verschiedene Möglichkeiten zu entscheiden, welche Website _kanonisch_ ist.

### Verwendung von HTTP 301 Weiterleitungen

In diesem Fall müssen Sie den Server, der die HTTP-Anfragen empfängt (was höchstwahrscheinlich derselbe für 'www'- und 'non-www'-URLs ist), so konfigurieren, dass er auf jede Anfrage an die nicht-kanonische Domain mit einer entsprechenden HTTP-{{HTTPStatus(301)}}-Antwort antwortet. Dies wird den Browser, der versucht, auf die nicht-kanonischen URLs zuzugreifen, zu ihrem kanonischen Äquivalent umleiten. Wenn Sie sich zum Beispiel entschieden haben, 'non-www'-URLs als kanonischen Typ zu verwenden, sollten Sie alle 'www'-URLs zu ihrer gleichwertigen URL ohne 'www' umleiten.

Beispiel:

1. Ein Server erhält eine Anfrage für `http://www.example.org/whaddup` (wenn die kanonische Domain example.org ist).
2. Der Server antwortet mit einem Code {{HTTPStatus(301)}} mit dem {{HTTPHeader("Location")}}-Header `Location: http://example.org/whaddup`.
3. Der Client stellt eine Anfrage an den Standort unter der kanonischen Domain: `http://example.org/whaddup`.

Das [HTML5-boilerplate Projekt](https://github.com/h5bp/html5-boilerplate) enthält ein Beispiel dafür, [wie man einen Apache-Server konfiguriert, um eine Domain auf die andere umzuleiten](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Verwendung von `<link rel="canonical">`

Es ist möglich, ein spezielles HTML-{{HTMLElement("link")}}-Element auf einer Seite hinzuzufügen, um anzugeben, welche die kanonische Adresse einer Seite ist. Dies hat keine Auswirkungen auf den menschlichen Leser der Seite, sondern informiert Suchmaschinen-Crawler, wo die Seite tatsächlich lebt. So vermeiden Sie, dass Suchmaschinen die gleiche Seite mehrmals indexieren, was dazu führen könnte, dass sie als doppelter Inhalt oder Spam betrachtet wird, und sogar Ihre Seite aus den Suchmaschinenergebnissen entfernt oder herabgestuft wird.

Beim Hinzufügen eines solchen Tags bieten Sie denselben Inhalt für beide Domains an und informieren die Suchmaschinen, welche URL kanonisch ist. Im vorherigen Beispiel würde `http://www.example.org/whaddup` denselben Inhalt wie `http://example.org/whaddup` bereitstellen, jedoch mit einem zusätzlichen {{htmlelement("link")}}-Element im Kopfbereich:

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

Im Gegensatz zum vorherigen Fall wird der Browserverlauf non-www und www-URLs als unabhängige Einträge betrachten.

## Machen Sie Ihre Seite für beide Möglichkeiten nutzbar

Mit diesen Techniken können Sie Ihren Server so konfigurieren, dass er für beide, die www-vorangestellten und die non-www-vorangestellten Domains korrekt antwortet. Es ist ratsam, dies zu tun, da Sie nicht vorhersagen können, welche URL Benutzer in die URL-Leiste ihres Browsers eingeben werden. Es ist eine Frage der Wahl, welchen Typ Sie als Ihren kanonischen Standort verwenden möchten, und leiten dann den anderen Typ darauf um.

## Entscheidungshilfe

Dies ist ein sehr subjektives Thema - es könnte als ein [bikeshedding](https://bikeshed.com/) Problem angesehen werden. Wenn Sie tiefergehende Informationen wünschen, finden Sie hier einige Ressourcen:

- [Optionen für nackte Domains](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains) auf netlify.com (2020)
- [WWW vs non-WWW – Welche ist besser für WordPress SEO?](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) auf wpbeginner.com (2023)

## Siehe auch

- [Statistiken darüber, was Menschen in die URL-Leiste eingeben](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
