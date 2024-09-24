---
title: Auswahl zwischen www und Nicht-www URLs
slug: Web/URI/Authority/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Eine häufige Frage unter Website-Besitzern ist, ob sie 'www' (`www.example.com`) oder 'nicht-www' (`example.com`) URLs wählen sollen. Diese Seite gibt einige Ratschläge, was am besten ist.

## Was sind Domainnamen?

In einer HTTP-URL wird die erste Zeichenkette, die dem initialen `http://` oder `https://` folgt, als Domainname bezeichnet. Dieser Domainname ist auf einem Server gehostet, auf dem sich das Dokument befindet.

Ein Server ist nicht unbedingt eine physische Maschine: Mehrere Server können auf derselben physischen Maschine existieren. Oder ein Server kann von mehreren Maschinen betrieben werden, die zusammenarbeiten, um die Antwort zu liefern oder die Last der Anfragen unter sich aufteilen. Der Hauptpunkt ist, dass semantisch _ein Domainname einen einzelnen Server repräsentiert_.

## Muss ich mich also für eine Option entscheiden?

- **Ja**, Sie müssen sich für eine entscheiden und dabei bleiben. Die Wahl, welche Sie als Ihren kanonischen Ort haben, liegt bei Ihnen, aber wenn Sie eine wählen, bleiben Sie dabei. Es wird Ihre Website für Ihre Benutzer und Suchmaschinen konsistenter erscheinen lassen. Dazu gehört, immer auf die gewählte Domain zu verlinken (was nicht schwer sein sollte, wenn Sie relative URLs in Ihrer Website verwenden) und immer Links (per E-Mail/soziale Netzwerke usw.) zur selben Domain zu teilen.
- **Nein**, Sie können beide haben. Was wichtig ist, ist die Kohärenz und Konsistenz, welche als die offizielle Domain gilt. **Diese offizielle Domain wird kanonischer Name genannt.** Alle Ihre absoluten Links sollten ihn verwenden. Auch wenn, können Sie die andere Domain noch laufen lassen: HTTP ermöglicht zwei Techniken, damit es für Ihre Benutzer oder Suchmaschinen klar ist, welche Domain die kanonische ist, während die nicht-kanonische Domain noch funktioniert und die erwarteten Seiten liefert.

Wählen Sie also eine Ihrer Domains als Ihre kanonische! Es gibt zwei Techniken unten, um die nicht-kanonische Domain weiterhin funktionieren zu lassen.

## Techniken für kanonische URLs

Es gibt verschiedene Möglichkeiten, um auszuwählen, welche Website _kanonisch_ ist.

### Verwendung von HTTP 301-Umleitungen

In diesem Fall müssen Sie den Server, der die HTTP-Anfragen erhält (was höchstwahrscheinlich derselbe für „www“ und „nicht-www“ URLs ist), so konfigurieren, dass er auf jede Anfrage an die nicht-kanonische Domain mit einer passenden HTTP {{HTTPStatus(301)}}-Antwort antwortet. Dies wird den Browser umleiten, der versucht, auf die nicht-kanonischen URLs zuzugreifen, zu ihrem kanonischen Äquivalent. Wenn Sie beispielsweise gewählt haben, „nicht-www“ URLs als kanonischen Typ zu verwenden, sollten Sie alle „www“ URLs zu ihrer äquivalenten URL ohne „www“ umleiten.

Beispiel:

1. Ein Server erhält eine Anfrage für `http://www.example.org/whaddup` (wenn die kanonische Domain example.org ist).
2. Der Server antwortet mit einem Code {{HTTPStatus(301)}} mit dem Header {{HTTPHeader("Location")}} `Location: http://example.org/whaddup`.
3. Der Client gibt eine Anfrage an den Ort unter der kanonischen Domain aus: `http://example.org/whaddup`.

Das [HTML5 boilerplate Projekt](https://github.com/h5bp/html5-boilerplate) hat ein Beispiel, wie man [einen Apache-Server konfiguriert, um eine Domain zur anderen umzuleiten](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Verwendung von `<link rel="canonical">`

Es ist möglich, ein spezielles HTML-{{HTMLElement("link")}}-Element einer Seite hinzuzufügen, um anzugeben, was die kanonische Adresse einer Seite ist. Dies hat keine Auswirkungen auf den menschlichen Leser der Seite, teilt Suchmaschinen-Crawlern jedoch mit, wo sich die Seite tatsächlich befindet. Auf diese Weise indizieren Suchmaschinen nicht mehrmals dieselbe Seite, was möglicherweise dazu führt, dass sie als doppelter Inhalt oder Spam betrachtet wird und sogar aus den Suchmaschinenergebnisseiten entfernt oder dort tiefer platziert wird.

Wenn Sie ein solches Tag hinzufügen, servieren Sie denselben Inhalt für beide Domains und teilen den Suchmaschinen mit, welche URL kanonisch ist. Im vorherigen Beispiel würde `http://www.example.org/whaddup` denselben Inhalt wie `http://example.org/whaddup` servieren, jedoch mit einem zusätzlichen {{htmlelement("link")}} Element im Kopf:

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

Im Gegensatz zum vorherigen Fall wird die Browserhistorie nicht-www und www URLs als unabhängige Einträge betrachten.

## Machen Sie Ihre Seite für beide funktional

Mit diesen Techniken können Sie Ihren Server so konfigurieren, dass er für beide — die www-prefixierten und die nicht-www-prefixierten Domains — korrekt antwortet. Es ist ein guter Rat, dies zu tun, da Sie nicht vorhersagen können, welche URL Benutzer in die Adressleiste ihres Browsers eingeben. Es geht darum, zu wählen, welchen Typ Sie als Ihren kanonischen Ort verwenden möchten, und dann den anderen Typ darauf umzuleiten.

## Entscheidung des Falls

Dies ist ein sehr subjektives Thema — es könnte als [bikeshedding](https://bikeshed.com/) Thema betrachtet werden. Wenn Sie tiefer lesen möchten, finden Sie hier einige Ressourcen:

- [Optionen für nackte Domains](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains) auf netlify.com (2020)
- [WWW vs Nicht-WWW – Was ist besser für WordPress SEO?](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) auf wpbeginner.com (2023)

## Siehe auch

- [Statistiken darüber, was Menschen in die Adressleiste eingeben](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
