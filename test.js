if (tw.local.MFAForm.region === "NCAL" || tw.local.MFAForm.region === "SCAL"){

    tw.local.MFAForm.regionHTMLtable = 
    
    " <table border='2' style='text-align:center'>" +
            "<tr> " +
                "<th style='text-align:center' colspan='3'>350% of Federal Poverty Level Guidelines</th>" +
            "</tr>" +
            "<tr> " + 
               " <td rowspan='2' style='padding: 3px' >If your household size is:</td>" +
                "<td colspan='2'  style='padding: 3px'>Your household income must be no more than:</td> " +
            "</tr>" +
            "<tr>" +
                "<td>Monthly</td> " +
                "<td>Annually</td>" +
            "</tr>" +
            "<tr> " +
                "<td>1</td>" +
                "<td>$3,541</td> " +
                "<td>$42,490</td>" +
            "</tr> " +
            "<tr> " +
                "<td>2</td>" +
                "<td>$4,801</td>" +
                " <td>$57,610</td> " +
            "</tr>" +
            "<tr>" +
                "<td>3</td>" +
                "<td>$6,061</td>" +
                "<td>$87,850</td>" +
            "</tr>" +
            "<tr>" +
                "<td>4</td>" +
               "<td>$7,321</td> " +
                "<td>$87,850</td>" +
            "</tr>" +
            "<tr>" +
                "<td>5</td>" +
                "<td>$8,581</td>" +
                "<td>$102,970</td>" +
            "</tr>" +
           " <tr>" +
                "<td>6</td> " +
                "<td>$9,841</td>" +
                "<td>$118,090</td>" +
            "</tr>" +
        "</table>" +
        
        "<p style='text-align:center'> Visit <a href='aspe.hhs.gov/poverty'>aspe.hhs.gov/poverty</a> to find the guidelines.</p>";
    }
    
    else if (tw.local.MFAForm.region === "GA" || tw.local.MFAForm.region === "CO" || tw.local.MFAForm.region === "MidAtlantic" || tw.local.MFAForm.region === "OR"   || tw.local.MFAForm.region === "WA") {
    
    tw.local.MFAForm.regionHTMLtable = 
    " <table border='2' style='text-align:center'>" +
            "<tr> " +
                "<th style='text-align:center' colspan='3'>300% of Federal Poverty Level Guidelines</th>" +
            "</tr>" +
            "<tr> " + 
               " <td rowspan='2' style='padding: 3px' >If your household size is:</td>" +
                "<td colspan='2'  style='padding: 3px'>Your household income must be no more than:</td> " +
            "</tr>" +
            "<tr>" +
                "<td>Monthly</td> " +
                "<td>Annually</td>" +
            "</tr>" +
            "<tr> " +
                "<td>1</td>" +
                "<td>$3,035</td> " +
                "<td>$36,420</td>" +
            "</tr> " +
            "<tr> " +
                "<td>2</td>" +
                "<td>$4,115</td>" +
                " <td>$49,380</td> " +
            "</tr>" +
            "<tr>" +
                "<td>3</td>" +
                "<td>$5,195</td>" +
                "<td>$62,340</td>" +
            "</tr>" +
            "<tr>" +
                "<td>4</td>" +
               "<td>$6,275</td> " +
                "<td>$75,300</td>" +
            "</tr>" +
            "<tr>" +
                "<td>5</td>" +
                "<td>$7,355</td>" +
                "<td>$88,260</td>" +
            "</tr>" +
           " <tr>" +
                "<td>6</td> " +
                "<td>$8,435</td>" +
                "<td>$101,220</td>" +
            "</tr>" +
        "</table>" + 
    
    "<p style='text-align:center'> Visit <a href='aspe.hhs.gov/poverty'>aspe.hhs.gov/poverty</a> to find the guidelines.</p>";
    }

    else if (tw.local.MFAForm.region === "HI") {
    
        tw.local.MFAForm.regionHTMLtable = 
        " <table border='2' style='text-align:center'>" +
                "<tr> " +
                    "<th style='text-align:center' colspan='3'>400% of Federal Poverty Level Guidelines</th>" +
                "</tr>" +
                "<tr> " + 
                   " <td rowspan='2' style='padding: 3px' >If your household size is:</td>" +
                    "<td colspan='2'  style='padding: 3px'>Your household income must be no more than:</td> " +
                "</tr>" +
                "<tr>" +
                    "<td>Monthly</td> " +
                    "<td>Annually</td>" +
                "</tr>" +
                "<tr> " +
                    "<td>1</td>" +
                    "<td>$4,653</td> " +
                    "<td>$55,840</td>" +
                "</tr> " +
                "<tr> " +
                    "<td>2</td>" +
                    "<td>$6,310</td>" +
                    " <td>$75,720</td> " +
                "</tr>" +
                "<tr>" +
                    "<td>3</td>" +
                    "<td>$7,967</td>" +
                    "<td>$95,600</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>4</td>" +
                   "<td>$9,623</td> " +
                    "<td>$115,480</td>" +
                "</tr>" +
                "<tr>" +
                    "<td>5</td>" +
                    "<td>$11,280</td>" +
                    "<td>$135,360</td>" +
                "</tr>" +
               " <tr>" +
                    "<td>6</td> " +
                    "<td>$12,937</td>" +
                    "<td>$155,240</td>" +
                "</tr>" +
            "</table>" + 
        
        "<p style='text-align:center'> Visit <a href='aspe.hhs.gov/poverty'>aspe.hhs.gov/poverty</a> to find the guidelines.</p>";
        }