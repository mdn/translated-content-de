---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) wird mit einer bestimmten Domain und einem Schema (normalerweise `https`) verknüpft und kann auch mit Unterdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}}-Attribut `Domain` gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer gerade betrachtet (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als vom selben Standort stammend betrachtet und als _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als vom selben Standort stammend betrachtet und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _Cross-Site-Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Drittanbieter-Cookies_ auf den Besitz durch ein drittes Unternehmen oder eine Organisation hinweisen könnten. Das Verhalten und die potenziellen Probleme sind jedoch die gleichen, unabhängig davon, ob Sie alle beteiligten Websites besitzen oder nicht. Zum Beispiel könnte eine Website Ressourcen wie Bilder von einer anderen Domain nutzen, die sie besitzt.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer zum ersten Mal eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource anfordert, die sich auf derselben Website befindet (zum Beispiel ein eingebettetes Bild, eine Web-Schriftart oder eine JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden gängigen Situationen gesendet:

- Wenn auf einer Website auf einen Link geklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Drittanbieter-Inhalte_ bezeichnet). Neben der ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anforderungen generieren, die mehr Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Klicken auf Links zu anderen Websites gesetzt werden, werden für eine Vielzahl von Zwecken verwendet. Beispielsweise könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, sodass ein Belohnungsbanner mit einem Rabatt angezeigt wird, wenn ein bestimmtes Produkt gekauft wird oder eine Provision an den Empfehlenden gezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungen. Beispielsweise könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Websites eingebettet haben, das ein Cookie auf allen Websites teilt, um zu bestätigen, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Website erneut anmelden muss.

Weitere Anwendungsfälle für Drittanbieter-Cookies umfassen:

- Teilen von Benutzereinstellungen oder Themeninformationen über mehrere Websites hinweg.
- Sammeln von Analysen über mehrere Websites hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnung von Nutzerinteressen, um Ad-Tech-Plattformen in die Lage zu versetzen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Beispiel mit dem Anmelde-Widget anhand eines fiktiven Unternehmens weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), seine Diskussionsforen (`forum.site`) und seinen Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Websites hat ein eingebettetes Anmelde-Widget, das unter `auth.site` gehostet wird, um den Anmeldestatus über die Websites hinweg zu speichern. Ein Benutzer kann sich auf einer dieser Websites anmelden, wobei ein Cookie im Browser für `auth.site` erstellt wird, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Websites geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Session-ID-Cookie, das beim Anmelden auf der ersten Website gesetzt wurde. Diese kann sie an den Server senden, überprüfen, ob sie noch gültig ist, und sich sofort auf dieser Website anmelden.

![visuelle Darstellung des oben beschriebenen vereinfachten Drittanbieter-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Allerdings können Drittanbieter-Cookies auch ohne die Zustimmung des Benutzers für illegitime Zwecke verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder das Interagieren mit eingebetteten Drittanbieter-Inhalten in einem `<iframe>` (zum Beispiel das Ausfüllen eines Formulars oder das Klicken auf einen Button) könnte zur Folge haben, dass Cookies gesetzt werden, die die Informationen eines Benutzers in die Hände einer Partei geben, von der sie es nicht erwartet haben. Diese Informationen könnten verwendet werden, um:

- Benutzern mit gezielten Anzeigen im Web nachzujagen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die den Affiliate-Umsatz erhöhen oder Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies kombinieren, die auf verschiedenen Websites gesetzt werden, auf denen die Drittanbieter-Inhalte eingebettet sind, um ein detailliertes Profil des Browserverlaufs, der Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um gruselige, aufdringliche Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Durch illegitime Mittel erlangte Benutzerinformationen werden häufig an andere Drittparteien weiterverkauft, was das Problem noch weiter vergrößert.

Gesetzgebung wie die [General Data Privacy Regulation](https://gdpr.eu/) (GDPR) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie es gesetzlich vorschreiben, dass Unternehmen transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen sind. Beispiele sind das Bitten der Kunden, der Datenerhebung zuzustimmen, es ihnen zu ermöglichen, die Daten, die ein Unternehmen über sie hält, einzusehen und auf Wunsch zu löschen. Dennoch ist es für Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browseranbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode einfügen, um langjährige Probleme mit Drittanbieter-Cookies bei beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox standardmäßig Drittanbieter-Cookies von bekannten Trackern blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/de/kb/enhanced-tracking-protection-firefox-desktop)). Der Erweiterte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. Der [Standard-Modus](https://support.mozilla.org/de/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert den [Totalen Cookie-Schutz](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), der Drittanbieter-Cookies ein separates Cookie-Behälter pro Website bereitstellt und dadurch das Cross-Site-Tracking verhindert. Im [Strengen Modus](https://support.mozilla.org/de/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Drittanbieter-Cookies.
- Apple hat eine ähnliche [Tracking-Präventionsrichtlinie](https://webkit.org/tracking-prevention-policy/); die Befolgung dieser Richtlinie hat zu einem ähnlichen Set von Drittanbieter-Cookie-Schutzmechanismen geführt, die standardmäßig aktiviert sind; siehe [Intelligente Tracking-Prävention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig nur Drittanbieter-Cookies im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass es jederzeit Drittanbieter-Cookies blockiert, wenn sie dies über `chrome://settings` wünschen. Google hat begonnen, Drittanbieter-Cookies für einen begrenzten Prozentsatz von Chrome-Nutzern zu deaktivieren, um die Auswirkungen zu testen, während gleichzeitig Technologien entwickelt werden, um wichtige Anwendungsfälle ohne Drittanbieter-Cookies zu ermöglichen. Siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies) für Details.
- Edge blockiert Tracker von unbesuchten Seiten und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens untersucht Microsoft auch die Möglichkeit, Drittanbieter-Cookies in Edge standardmäßig zu blockieren. Weitere Informationen finden Sie unter [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave-Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Verwendung von Drittanbieter-Cookies in Firefox fallweise über die Browsereinstellungen zu erlauben. In Safari ist die Kontrolle jedoch begrenzter — Sie können das Cross-Site-Tracking verhindern, aber den Zugriff auf Drittanbieter-Cookies pro Frame nur auf Code-Ebene erlauben, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API).

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu reduzieren: siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).

## Verwendung von Drittanbieter-Cookies

### Aktivierung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern zu spezifizieren, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert `Lax` verwendet. Dieser weist den Browser an, keine Drittanbieter-Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Seite aus navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Seite zu Ihrer Seite navigiert, um beispielsweise das Erlebnis sofort zu personalisieren, sobald er dort ankommt.

Es ist jedoch nicht geeignet, wenn Sie Cross-Site-Inhalte in mehreren Websites innerhalb von `<iframe>`s einbetten möchten und auf Drittanbieter-Cookies für die Funktionalität angewiesen sind, wie im Beispiel oben mit der Anmeldung. In solchen Fällen müssen Sie explizit `SameSite=None` setzen, um dem Browser zu erlauben, diese Cookies zu übermitteln:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den Zugriff von JavaScript auf das Cookie zu deaktivieren (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen speichern, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt verschiedene Strategien, um Websites zu helfen, Einschränkungen in Browsern zu minimieren, in denen Drittanbieter-Cookies blockiert sind:

1. Überprüfen Sie Ihre Nutzung von Drittanbieter-Cookies. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder nach gespeicherten `SameSite=None`-Cookies in Ihren Browser-DevTools suchen, beispielsweise im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues Panel](https://developer.chrome.com/docs/devtools/issues/) meldet auch [Probleme mit dem Blockieren von Drittanbieter-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste betroffener Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was nicht funktioniert. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst könnten Sie Ihren Code widerstandsfähiger machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Drittanbieter-Cookie-Daten nicht verfügbar sind, anstatt vollständig zu scheitern. Befolgen Sie die Prinzipien der {{Glossary("Graceful_degradation", "graceful degradation")}}.
4. Sammeln Sie Daten über alternative Mittel wie Benutzerumfragen oder Quiz, oder sehen Sie sich Daten an, die Sie bereits haben, um Trends zu erkennen (beispielsweise Bestellungsverläufe von Produkten).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder erwägen Sie eine serverseitige Lösung.
6. Wenn Ihre Drittanbieter-Cookies nur über eine kleine Anzahl verwandter, bekannter Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf Cross-Site-Cookies nur für diese spezifischen Websites zu erlauben. Storage Access fordert den Benutzer auf, die Erlaubnis für eine Website zu erteilen, Drittanbieter-Cookies pro Frame zu verwenden.
   - Wenn Sie bereits eine Lösung mithilfe der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, Ihr Implementierung mit dem Verhalten in Chrome zu überprüfen, das in Version 119 aktualisiert wurde, um vollständige Unterstützung zu bieten.
   - Related Website Sets können als progressive Erweiterung der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Sites im Set fordern Benutzer nicht dazu auf, die Erlaubnis zum Zugriff auf Drittanbieter-Cookies zu erteilen.
7. Wenn Ihre Drittanbieter-Cookies auf einer 1:1-Basis mit den Top-Level-Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies mit unabhängigen partitionierten Zuständen](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch bekannt als partitionierte Cookies) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Behälter pro Top-Level-Site zuzugreifen. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren bestehenden Cross-Site-Cookies. Sie können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Websites geteilt werden. Beachten Sie, dass CHIPS derzeit nur in Chromium verfügbar sind.

## Ersetzen von Drittanbieter-Cookies

Es stehen mehrere Funktionen für Entwickler zur Verfügung, die keine Drittanbieter-Cookies mehr verwenden möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle implementieren. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber sie sind es wert, in Betracht gezogen zu werden, während Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können die verschiedenen in Googles [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox) Projekt verfügbaren Funktionen erkunden, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur in Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, mit denen Benutzer sich bei mehreren Websites und Diensten anmelden können.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglicht Anti-Betrug und Anti-Spam, indem begrenzte, nicht identifizierende Informationen zwischen Websites ausgetauscht werden.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Inhaltsanpassung.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwenden Sie Daten von einer App oder Website, um eine Anzeige zu wählen, wenn der Benutzer eine andere App oder Website besucht.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Conversions.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
