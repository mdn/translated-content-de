---
title: Nutzung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten Cross-Site-Dokumenten verwendet werden, um zu überprüfen, ob sie Zugang zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitioniertem Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) haben und, falls nicht, den Zugang dazu zu beantragen. Wir betrachten kurz ein typisches Szenario für den Speicherzugriff.

> [!NOTE]
> Wenn wir im Kontext der Storage Access API von Drittanbieter-Cookies sprechen, meinen wir implizit [_unpartitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Drittanbieter-Cookies.

## Nutzungshinweise

Die Storage Access API ist so konzipiert, dass eingebettete Inhalte die Erlaubnis zum Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anfordern können – die meisten modernen Browser blockieren diesen Zugriff standardmäßig, um die Privatsphäre der Benutzer zu schützen. Da eingebettete Inhalte nicht wissen, wie sich ein Browser in dieser Hinsicht verhalten wird, ist es am besten, immer zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Speicherzugriff hat, bevor versucht wird, einen Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser oft ein leeres Cookie-Glas zurückgeben, wenn der Zugriff auf Drittanbieter-Cookies blockiert ist.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes Cross-Site-{{htmlelement("iframe")}} unter einer Browser-Speicherzugriffspolitik Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand erhalten kann, die ansonsten den Zugriff darauf blockieren würde.

## Erlauben eines sandboxed `<iframe>` zur Nutzung der API

Zuallererst muss, wenn das `<iframe>` sandboxed ist, die einbettende Website das `allow-storage-access-by-user-activation` [sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) hinzufügen, um Anfragen der Storage Access API erfolgreich zu machen, zusammen mit `allow-scripts` und `allow-same-origin`, damit es ein Skript ausführen kann, um die API aufzurufen und in einem Ursprungsbereich auszuführen, der Cookies und Zustand haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern von Speicherzugriff

Nun zum Code, der innerhalb des eingebetteten Dokuments ausgeführt wird. In diesem Code:

1. Zuerst verwenden wir Feature-Detektion (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Wenn nicht, führen wir unseren Code aus, der auf Cookies zugreift, und hoffen, dass es funktioniert. Es sollte defensiv kodiert werden, um mit solchen Eventualitäten umzugehen.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet dies, dass dieses {{htmlelement("iframe")}} bereits Zugriff hat, und wir können sofort unseren Code ausführen, der auf Cookies und Zustand zugreift.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu überprüfen, ob die Erlaubnis, auf Drittanbieter-Cookies und unpartitionierten Zustand zuzugreifen, bereits erteilt wurde (d.h. zu einem anderen gleichseitigen Einbettung). Wir verpacken diesen gesamten Abschnitt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block, da [einige Browser die `"storage-access"` Berechtigung nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was dazu führen kann, dass der `query()` Aufruf eine Ausnahme auslöst. Wenn er eine Ausnahme auslöst, melden wir dies der Konsole und versuchen trotzdem, den Cookie-Code auszuführen.
5. Wenn der Berechtigungsstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Benutzer Zeit spart, dann können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
6. Wenn der Berechtigungsstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Benutzerinteraktion auf. Dieser Aufruf kann eine Aufforderung für den Benutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
7. Wenn der Berechtigungsstatus `"denied"` ist, hat der Benutzer unsere Anfragen zum Zugriff auf Drittanbieter-Cookies oder unpartitionierten Zustand abgelehnt, und unser Code kann sie nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> **Hinweis:** `requestStorageAccess()` Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit eine Nutzeraktion wie einen Tipp oder Klick ({{Glossary("transient_activation", "vorübergehende Aktivierung")}}), oder wenn die Erlaubnis zuvor erteilt wurde. Wenn die Erlaubnis nicht zuvor erteilt wurde, müssen `requestStorageAccess()` Anfragen innerhalb eines benutzergesteuerten gesteuerten Ereignishandlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Die Chrome-exklusive[verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) Funktion kann als progressive Verbesserungsmechanismus betrachtet werden, der neben der Storage Access API funktioniert – unterstützende Browser gewähren standardmäßig Drittanbieter-Cookie- und unpartitionierten Zustand zwischen Websites im selben Set. Dies bedeutet, dass die übliche Benutzerberechtigungsanforderungs-Workflow wie oben beschrieben nicht durchlaufen werden muss, was ein benutzerfreundlicheres Erlebnis für Benutzer von Websites im Set bedeutet.

## Anfordern von Speicherzugriff von der obersten Websiteebene im Namen eingebetteter Ressourcen

Die oben beschriebenen Funktionen der Storage Access API ermöglichen es einem eingebetteten Dokument, eigenen Drittanbieter-Cookie-Zugriff anzufordern. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), eine vorgeschlagene Erweiterung der Storage Access API, die es der obersten Websiteebene ermöglicht, Speicherzugriff im Namen bestimmter verwandter Ursprünge anzufordern.

Die `requestStorageAccessFor()` Methode löst Herausforderungen bei der Übernahme der Storage Access API auf oberster Websiteebene, die Cross-Site-Bilder oder -Skripte verwendet, die Cookies erfordern. Sie kann Drittanbieter-Cookie-Zugriff für Cross-Site-Ressourcen direkt in die oberste Website einbetten, die nicht in der Lage sind, ihren eigenen Speicherzugriff anzufordern, zum Beispiel über {{htmlelement("img")}} oder {{htmlelement("script")}} Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende oberste Seite als auch die eingebettete Ressource, für die sie Speicherzugriff anfordert, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Die typische Nutzung von `requestStorageAccessFor()` sieht folgendermaßen aus (diesmal im normalen Promise-Stil anstatt async/await):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Im Gegensatz zu `requestStorageAccess()` überprüft Chrome bei einem Aufruf von `requestStorageAccessFor()` nicht, ob eine Interaktion in einem Dokument auf höchster Ebene innerhalb der letzten 30 Tage stattgefunden hat, da sich der Benutzer bereits auf der Seite befindet. Siehe [Browser-spezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome) für weitere Details zu diesem Verhalten.

Beim Abfragen des Berechtigungsstatus für Speicherzugriffsanfragen im Namen eines anderen Ursprungs wird ein anderer Berechtigungsname als im Rest der Storage Access API verwendet: `"top-level-storage-access"` anstelle von `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um zu erfahren, ob dem Ursprung bereits die Erlaubnis erteilt wurde oder ob noch Cookie-Zugriff angefordert werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir sofort Cookies verwenden; `requestStorageAccessFor()` wurde bereits aufgerufen, sodass es nicht erneut aufgerufen werden muss.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion wie einem Klick auf eine Schaltfläche aufrufen.

Nachdem die `"top-level-storage-access"` Berechtigung erteilt wurde, werden Cookies bei Cross-Site-Anfragen einbezogen, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) enthalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) Option verwenden und Ressourcen müssen das `crossorigin="use-credentials"` Attribut enthalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
